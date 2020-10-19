export type Links = {
    www: string
}

export type Selling = {
    high: number,
    low: number
}

export type PriceRange = {
    selling: Selling
}

export type Price = {
    regular: number,
    selling: number
}

export type ImageProperties = {
    size: string,
    meta: string,
    alt: string,
    rel: string,
    width: number,
    href: string,
    height: number
}

export type Flag = {
    bopisSuppress: boolean,
    rank: number,
    id: string
}

export type Reviews = {
    recommendationCount: number,
    likelihood: number,
    reviewCount: number,
    averageRating: number,
    id: string,
    type: string
}

export type Product = {
    id: string,
    name: string,
    links: Links,
    priceRange?: PriceRange,
    price?: Price,
    thumbnail: ImageProperties,
    hero: ImageProperties,
    images: Array<any>,
    swatches: Array<any>,
    messages: Array<any>,
    flags: Array<Flag>,
    reviews: Reviews
}