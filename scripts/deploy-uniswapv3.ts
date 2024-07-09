import { ethers } from 'hardhat'
import factoryABI from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import poolABI from '@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json'
import POSITION_MANAGER_ABI from "@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json"
import { Percent, Token } from '@uniswap/sdk-core'
import { encodeSqrtRatioX96, nearestUsableTick, NonfungiblePositionManager, Position, Pool } from '@uniswap/v3-sdk'


async function main () {
    const [deployer] = await ethers.getSigners()
    // console.log('Deploying contracts with the account: ', deployer.address)
    const factoryAddress = '0x33128a8fC17869897dcE68Ed026d694621f6FDfD'
    const nonFungiblePositionManagerAddy = '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1'
    const NGUToken = '0xAa06e3Cd9BB2bD2DEF2107B3F1691829484989BC'
    const TestToken = '0xDE8A4e31F58E4199d0D4642A9bFB30DA892a52be'
    // const BaseSepoliaWETH = '0x4200000000000000000000000000000000000006'
    
    const tokens = [NGUToken, TestToken].sort()

    const factory = new ethers.Contract(factoryAddress, factoryABI.abi, deployer)
    console.log('Factory created')

    function verifyAddress(address: string) {
        return ethers.isAddress(address)
    }

    let tx
    let poolAddress
    if (verifyAddress(factoryAddress) && verifyAddress(NGUToken) && verifyAddress(TestToken)) {
        console.log('All addresses are valid')
        
        const existingPool = await factory.getPool(tokens[0], tokens[1], 3000)
        if (existingPool !== '0x0000000000000000000000000000000000000000') {
            console.log('Pool already exists: ', existingPool)
            poolAddress = existingPool
        } else {
            console.log('Creating pool')
            tx = await factory.createPool(tokens[0], tokens[1], 3000, {
                gasLimit: 9999999,
            })
            // console.log('Creating pool: ', tx)

            console.log('Awaiting recipt: \n')
            const receipt = await tx.wait()
            console.log('Pool created: ', receipt )
                    
            poolAddress = await factory.getPool(tokens[0], tokens[1], 3000)
            console.log('Pool deployed to address: ', poolAddress)
        }
    }
        // console.log('Attempting to initialize pool: ')
        const poolContract = new ethers.Contract(poolAddress, poolABI.abi, deployer)
        // console.log('Pool contract:  ', poolContract)
         
        const currentPoolState = await getPoolState(poolContract)
        console.log('Initial Pool State: ', currentPoolState)
        if (currentPoolState.tick === 0n) {
            console.log('Initializing pool')
            const sqrtPriceX96 = encodeSqrtRatioX96(1,1)
            const poolContract = new ethers.Contract(poolAddress, poolABI.abi, deployer)
            // const nfpmc = new ethers.Contract(nonFungiblePositionManagerAddy, POSITION_MANAGER_ABI.abi, deployer)
            const initializeTx = await poolContract.initialize(sqrtPriceX96.toString(), {gasLimit: 9999999})
            await initializeTx.wait()
            console.log('Pool initialized')
        }

        const poolState = await getPoolState(poolContract)
        console.log('Pool state after initialization: ', poolState)


        const Token_NumberGoUp = new Token(84532, NGUToken, 18)
        const Token_TestToken = new Token(84532, TestToken, 18)

        console.log('NGU Token: ', Token_NumberGoUp)
        console.log('Test Token: ', Token_TestToken)
        
        const tickSpacing = await poolContract.tickSpacing()
        console.log('Tick spacing: ', tickSpacing.toString())

        const configuredPool = new Pool(
            Token_NumberGoUp,
            Token_TestToken,
            3000,
            poolState.sqrtPriceX96.toString(),
            poolState.liquidity.toString(),
            poolState.tick
        )

        const nearestTick = nearestUsableTick(configuredPool.tickCurrent, tickSpacing.toNumber())
        const tickLower = nearestTick - tickSpacing.toNumber() * 2
        const tickUpper = nearestTick + tickSpacing.toNumber() * 2

        const position = Position.fromAmounts({
            pool: configuredPool,
            tickLower: tickLower,
            tickUpper: tickUpper,
            amount0: ethers.parseUnits("10000", 18).toString(),
            amount1: ethers.parseUnits("10000", 18).toString(),
            useFullPrecision: false,
        })

        const mintOptions = {
            recipient: deployer.address,
            deadline: Math.floor(Date.now() / 1000) + 60 * 20,
            slippageTolerance: new Percent(50, 10_000),
        }

        const nfpm = new ethers.Contract(nonFungiblePositionManagerAddy, POSITION_MANAGER_ABI.abi, deployer)
        // const nfpm = NonfungiblePositionManager.
        
        const {calldata, value } = await nfpm.addCallParameters(position, mintOptions)

        const transaction = {
            data: calldata,
            to: nfpm.address.toString(),
            value: value,
            from: deployer.address.toString(),
            gasLimit: 10000000,
        }

        const txResponse = await deployer.sendTransaction(transaction)

        const resp = await txResponse.wait()

        console.log('Added liquidity: ', resp)




        // const NGUAmount = ethers.parseUnits("10000", 18)
        // const TestTokenAmount = ethers.parseUnits("10000", 18)

        // const tickLower = -60000
        // const tickUpper = 60000

        // const fee = 10000

        // const params = {
        //     token0: Token_NumberGoUp.address,
        //     token1: Token_TestToken.address,
        //     fee: fee,
        //     tickLower: tickLower,
        //     tickUpper: tickUpper,
        //     amount0Desired: NGUAmount,
        //     amount1Desired: TestTokenAmount,
        //     amount0Min: 0,
        //     amount1Min: 0,
        //     recipient: '0x012cFd074DE77389054eC114fBA8e0b55a74378b',
        //     deadline: Math.floor(Date.now() / 1000) + (60 * 10)
        // }

        // console.log('Params are : ', params)
        
        // const txAddLiquidy = await nfpm.mint(params, { gasLimit: 10000000 })
        // console.log('Adding liquidity: ', txAddLiquidy)

        // console.log('Awaiting receipt: ')
        // const receipt = await txAddLiquidy.wait()
        // console.log('Liquidity added: ', receipt)



    async function getPoolState(poolContract: any) {
        const liquidity = await poolContract.liquidity();
        const slot = await poolContract.slot0();
    
        const PoolState = {
            liquidity,
            sqrtPriceX96: slot[0],
            tick: slot[1],
            observationIndex: slot[2],
            observationCardinality: slot[3],
            observationCardinalityNext: slot[4],
            feeProtocol: slot[5],
            unlocked: slot[6],
        };
    
        return PoolState;
    }

}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})