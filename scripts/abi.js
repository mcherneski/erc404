/* eslint-disable prettier/prettier */
const UNISWAP_FACTOR_ABI = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'uint24', name: 'fee', type: 'uint24' },
            { indexed: true, internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        ],
        name: 'FeeAmountEnabled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'oldOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'OwnerChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'token0', type: 'address' },
            { indexed: true, internalType: 'address', name: 'token1', type: 'address' },
            { indexed: true, internalType: 'uint24', name: 'fee', type: 'uint24' },
            { indexed: false, internalType: 'int24', name: 'tickSpacing', type: 'int24' },
            { indexed: false, internalType: 'address', name: 'pool', type: 'address' },
        ],
        name: 'PoolCreated',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'address', name: 'tokenA', type: 'address' },
            { internalType: 'address', name: 'tokenB', type: 'address' },
            { internalType: 'uint24', name: 'fee', type: 'uint24' },
        ],
        name: 'createPool',
        outputs: [{ internalType: 'address', name: 'pool', type: 'address' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint24', name: 'fee', type: 'uint24' },
            { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        ],
        name: 'enableFeeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
        name: 'feeAmountTickSpacing',
        outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint24', name: '', type: 'uint24' },
        ],
        name: 'getPool',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'parameters',
        outputs: [
            { internalType: 'address', name: 'factory', type: 'address' },
            { internalType: 'address', name: 'token0', type: 'address' },
            { internalType: 'address', name: 'token1', type: 'address' },
            { internalType: 'uint24', name: 'fee', type: 'uint24' },
            { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'setOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
const UNISWAP_V3_POOL_ABI = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'int24', name: 'tickLower', type: 'int24' },
            { indexed: true, internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { indexed: false, internalType: 'uint128', name: 'amount', type: 'uint128' },
            { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        name: 'Burn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: false, internalType: 'address', name: 'recipient', type: 'address' },
            { indexed: true, internalType: 'int24', name: 'tickLower', type: 'int24' },
            { indexed: true, internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { indexed: false, internalType: 'uint128', name: 'amount0', type: 'uint128' },
            { indexed: false, internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        name: 'Collect',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
            { indexed: false, internalType: 'uint128', name: 'amount0', type: 'uint128' },
            { indexed: false, internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        name: 'CollectProtocol',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'paid0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'paid1', type: 'uint256' },
        ],
        name: 'Flash',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint16',
                name: 'observationCardinalityNextOld',
                type: 'uint16',
            },
            {
                indexed: false,
                internalType: 'uint16',
                name: 'observationCardinalityNextNew',
                type: 'uint16',
            },
        ],
        name: 'IncreaseObservationCardinalityNext',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint160', name: 'sqrtPriceX96', type: 'uint160' },
            { indexed: false, internalType: 'int24', name: 'tick', type: 'int24' },
        ],
        name: 'Initialize',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'int24', name: 'tickLower', type: 'int24' },
            { indexed: true, internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { indexed: false, internalType: 'uint128', name: 'amount', type: 'uint128' },
            { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        name: 'Mint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint8', name: 'feeProtocol0Old', type: 'uint8' },
            { indexed: false, internalType: 'uint8', name: 'feeProtocol1Old', type: 'uint8' },
            { indexed: false, internalType: 'uint8', name: 'feeProtocol0New', type: 'uint8' },
            { indexed: false, internalType: 'uint8', name: 'feeProtocol1New', type: 'uint8' },
        ],
        name: 'SetFeeProtocol',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
            { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
            { indexed: false, internalType: 'int256', name: 'amount0', type: 'int256' },
            { indexed: false, internalType: 'int256', name: 'amount1', type: 'int256' },
            { indexed: false, internalType: 'uint160', name: 'sqrtPriceX96', type: 'uint160' },
            { indexed: false, internalType: 'uint128', name: 'liquidity', type: 'uint128' },
            { indexed: false, internalType: 'int24', name: 'tick', type: 'int24' },
        ],
        name: 'Swap',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'int24', name: 'tickLower', type: 'int24' },
            { internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { internalType: 'uint128', name: 'amount', type: 'uint128' },
        ],
        name: 'burn',
        outputs: [
            { internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'recipient', type: 'address' },
            { internalType: 'int24', name: 'tickLower', type: 'int24' },
            { internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { internalType: 'uint128', name: 'amount0Requested', type: 'uint128' },
            { internalType: 'uint128', name: 'amount1Requested', type: 'uint128' },
        ],
        name: 'collect',
        outputs: [
            { internalType: 'uint128', name: 'amount0', type: 'uint128' },
            { internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'recipient', type: 'address' },
            { internalType: 'uint128', name: 'amount0Requested', type: 'uint128' },
            { internalType: 'uint128', name: 'amount1Requested', type: 'uint128' },
        ],
        name: 'collectProtocol',
        outputs: [
            { internalType: 'uint128', name: 'amount0', type: 'uint128' },
            { internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'fee',
        outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'feeGrowthGlobal0X128',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'feeGrowthGlobal1X128',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'recipient', type: 'address' },
            { internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { internalType: 'uint256', name: 'amount1', type: 'uint256' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'flash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint16', name: 'observationCardinalityNext', type: 'uint16' }],
        name: 'increaseObservationCardinalityNext',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint160', name: 'sqrtPriceX96', type: 'uint160' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'liquidity',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxLiquidityPerTick',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'recipient', type: 'address' },
            { internalType: 'int24', name: 'tickLower', type: 'int24' },
            { internalType: 'int24', name: 'tickUpper', type: 'int24' },
            { internalType: 'uint128', name: 'amount', type: 'uint128' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'mint',
        outputs: [
            { internalType: 'uint256', name: 'amount0', type: 'uint256' },
            { internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'observations',
        outputs: [
            { internalType: 'uint32', name: 'blockTimestamp', type: 'uint32' },
            { internalType: 'int56', name: 'tickCumulative', type: 'int56' },
            { internalType: 'uint160', name: 'secondsPerLiquidityCumulativeX128', type: 'uint160' },
            { internalType: 'bool', name: 'initialized', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint32[]', name: 'secondsAgos', type: 'uint32[]' }],
        name: 'observe',
        outputs: [
            { internalType: 'int56[]', name: 'tickCumulatives', type: 'int56[]' },
            { internalType: 'uint160[]', name: 'secondsPerLiquidityCumulativeX128s', type: 'uint160[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'positions',
        outputs: [
            { internalType: 'uint128', name: 'liquidity', type: 'uint128' },
            { internalType: 'uint256', name: 'feeGrowthInside0LastX128', type: 'uint256' },
            { internalType: 'uint256', name: 'feeGrowthInside1LastX128', type: 'uint256' },
            { internalType: 'uint128', name: 'tokensOwed0', type: 'uint128' },
            { internalType: 'uint128', name: 'tokensOwed1', type: 'uint128' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'protocolFees',
        outputs: [
            { internalType: 'uint128', name: 'token0', type: 'uint128' },
            { internalType: 'uint128', name: 'token1', type: 'uint128' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint8', name: 'feeProtocol0', type: 'uint8' },
            { internalType: 'uint8', name: 'feeProtocol1', type: 'uint8' },
        ],
        name: 'setFeeProtocol',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'slot0',
        outputs: [
            { internalType: 'uint160', name: 'sqrtPriceX96', type: 'uint160' },
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint16', name: 'observationIndex', type: 'uint16' },
            { internalType: 'uint16', name: 'observationCardinality', type: 'uint16' },
            { internalType: 'uint16', name: 'observationCardinalityNext', type: 'uint16' },
            { internalType: 'uint8', name: 'feeProtocol', type: 'uint8' },
            { internalType: 'bool', name: 'unlocked', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'int24', name: 'tickLower', type: 'int24' },
            { internalType: 'int24', name: 'tickUpper', type: 'int24' },
        ],
        name: 'snapshotCumulativesInside',
        outputs: [
            { internalType: 'int56', name: 'tickCumulativeInside', type: 'int56' },
            { internalType: 'uint160', name: 'secondsPerLiquidityInsideX128', type: 'uint160' },
            { internalType: 'uint32', name: 'secondsInside', type: 'uint32' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'recipient', type: 'address' },
            { internalType: 'bool', name: 'zeroForOne', type: 'bool' },
            { internalType: 'int256', name: 'amountSpecified', type: 'int256' },
            { internalType: 'uint160', name: 'sqrtPriceLimitX96', type: 'uint160' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'swap',
        outputs: [
            { internalType: 'int256', name: 'amount0', type: 'int256' },
            { internalType: 'int256', name: 'amount1', type: 'int256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'int16', name: '', type: 'int16' }],
        name: 'tickBitmap',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'tickSpacing',
        outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        name: 'ticks',
        outputs: [
            { internalType: 'uint128', name: 'liquidityGross', type: 'uint128' },
            { internalType: 'int128', name: 'liquidityNet', type: 'int128' },
            { internalType: 'uint256', name: 'feeGrowthOutside0X128', type: 'uint256' },
            { internalType: 'uint256', name: 'feeGrowthOutside1X128', type: 'uint256' },
            { internalType: 'int56', name: 'tickCumulativeOutside', type: 'int56' },
            { internalType: 'uint160', name: 'secondsPerLiquidityOutsideX128', type: 'uint160' },
            { internalType: 'uint32', name: 'secondsOutside', type: 'uint32' },
            { internalType: 'bool', name: 'initialized', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'token0',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'token1',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
];

const YEET_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentNonce",
                "type": "uint256"
            }
        ],
        "name": "InvalidAccountNonce",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

module.exports = { UNISWAP_FACTOR_ABI, UNISWAP_V3_POOL_ABI, YEET_ABI };