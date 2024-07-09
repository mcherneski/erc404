import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
    gasPrice: 21,
    enabled: true,
  },
  networks: {
    hardhat: {},
    baseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/M5y_DXUzx2zGDQDALv2MT0VKAmRN1oTZ`,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY as string],
      loggingEnabled: true,
    },
    base: {
      url: 'https://base-mainnet.g.alchemy.com/v2/M5y_DXUzx2zGDQDALv2MT0VKAmRN1oTZ',
      accounts: [process.env.MAINNET_PRIVATE_KEY as string],
      loggingEnabled: true,
    }
  },
}

export default config
