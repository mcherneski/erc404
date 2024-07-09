import {ethers} from 'hardhat'
import { Pool, Position, NonfungiblePositionManager, MintOptions } from '@uniswap/v3-sdk'
import { Token, CurrencyAmount, BigintIsh } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

async function AddLiquidity() {
    const [deployer] = await ethers.getSigners()
    const poolAddress = '0x4D3ddD5dD56513353175EFAe9B6CE799CAC17782'
    const positionManagerAddress = '0x1238536071E1c677A632429e3655c799b22cDA52'



    const NGUToken = new Token(3, '0xaD17D97aba6E4FE93464C38AC11f58638116E74B', 18, 'NGU', 'Number Go Up')
    const TestToken = new Token(3, '0x7f9c4E6eb57f0f6c366Eff65064a52aE47f1B5F3', 18, 'YEET', 'TestToken')
    // const tokenInApproval = await getTokenTransferApproval(
        
    // )
    const pool = new Pool(
        NGUToken,
        TestToken,
        3000,
        '1000000000000000000',
        0,
        -501938
    )

    const position = new Position({
        pool: pool,
        tickLower: -100,
        tickUpper: 200,
        liquidity: JSBI.BigInt('1000000000000000000')
    })

    const positionManager = new ethers.Contract(positionManagerAddress, [
        'function mint((address,address,uint24,int24,int24,uint128,uint256,uint256,address,uint256)) external returns (uint256,uint128,uint256,uint256)',   
    ], deployer)

    const tx = await positionManager.mint({
        token0: NGUToken.address,
        token1: TestToken.address,
        fee: pool.fee,
        tickLower: position.tickLower,
        tickUpper: position.tickUpper,
        amount0Desired: position.amount0.toExact(),
        amount1Desired: position.amount1.toExact(),
        amount0Min: '0',
        amount1Min: '0',
        recipient: deployer.address,
        deadline: Math.floor(Date.now() / 1000) + 60 * 20
    })

    await tx.wait()
    console.log('Liquidity added!')

}

AddLiquidity().catch((error) => {
    console.error(error)
    process.exit(1)
})