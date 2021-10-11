interface PaymentToken {
    id: string
    decimals: number
    symbol: string
}
interface Collection {
    id: string
    name: string
    symbol: string
}
interface Target {
    id: string
    tokenId: string
    tokenURI: string
    collection: Collection
}
interface metadata {
    image:string
    name:string
    author: string
    totalSupply: string
    description: string
    imageFull: string
    animationType: string
    animation_url: string
}
interface Iliquidity {
    priceDollar: string
    hasLiquidity: boolean
}
export interface MarketplaceERC20Item {
    name: string
    symbol: string
    exitPrice: string
    id: string
    decimals: number
    paymentToken: PaymentToken
    totalSupply:string
    target: Target
    metadata:metadata
    bids: MarketplaceERC20ItemBid[]
    cutoff: number
    minimumDuration: number
    type: string
    liquidity:Iliquidity
    holdersCount: number
    nftCount: number
}

export interface MarketplaceERC20ItemBid {
    name: string
    symbol: string
    exitPrice: string
    reservePrice: string
    decimals: number
    paymentToken: PaymentToken
    totalSupply:string
    target: Target
    metadata:metadata
    bidder: string
    id: string
    timestamp: number
    txId: string
}

export interface ERC20Asset {
    address: string
    id: string
    symbol: string
    decimals: number
    imageUrl: string
    locked: boolean
    name: string
}