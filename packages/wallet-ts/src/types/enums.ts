import { WalletErrorActionModule } from '@injectivelabs/exceptions'

export enum Wallet {
  Okx = 'okx',
  Leap = 'leap',
  Keplr = 'keplr',
  Ninji = 'ninji',
  Torus = 'torus',
  Ledger = 'ledger',
  Trezor = 'trezor',
  Phantom = 'phantom',
  Metamask = 'metamask',
  TrustWallet = 'trust-wallet',
  Cosmostation = 'cosmostation',
  LedgerCosmos = 'ledger-cosmos',
  LedgerLegacy = 'ledger-legacy',
  WalletConnect = 'wallet-connect',
  CosmostationEth = 'cosmostation-eth',
}

export enum WalletDeviceType {
  Mobile = 'mobile',
  Browser = 'browser',
  Hardware = 'hardware',
}

export enum WalletEventListener {
  AccountChange = 'account-change',
  ChainIdChange = 'chain-id-change',
}

export const WalletAction = { ...WalletErrorActionModule }
