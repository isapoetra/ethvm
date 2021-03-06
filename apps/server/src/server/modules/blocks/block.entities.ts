import { BlockStats } from '@app/server/modules/stats'
import { Tx } from '@app/server/modules/txs'

export interface SmallBlock {
  number: number
  hash: string
  miner: Buffer
  timestamp: Buffer
  transactionCount: number
  uncleHashes?: Buffer[]
  isUncle: boolean
  totalBlockReward?: Buffer
  blockReward?: Buffer
  txFees?: Buffer
  stateRoot?: Buffer
  uncleReward?: Buffer
  difficulty?: Buffer
  blockStats?: BlockStats
}

export interface Block {
  number: number
  hash: string
  parentHash?: Buffer
  nonce?: Buffer
  mixHash?: Buffer
  sha3Uncles?: Buffer
  logsBloom?: Buffer
  stateRoot?: Buffer
  miner: Buffer
  minerBalance?: Buffer
  difficulty?: Buffer
  totalDifficulty?: Buffer
  extraData?: Buffer
  size?: Buffer
  gasLimit?: Buffer
  gasUsed?: Buffer
  timestamp: Buffer
  transactionsRoot?: Buffer
  receiptsRoot?: Buffer
  transactions?: Tx[]
  transactionHashes?: string[]
  transactionCount?: number
  uncleHashes?: Buffer[]
  uncles?: Block[]
  isUncle: boolean
  txFees?: Buffer
  blockReward?: Buffer
  totalBlockReward?: Buffer
  uncleReward?: Buffer
  blockStats?: BlockStats
}
