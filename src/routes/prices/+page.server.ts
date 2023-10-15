

export async function load() {
    // @ts-ignore
    let priceData = await import(`../../pages/prices/prices.md`)
    return {prices: priceData.metadata}
}