

export async function load() {
    // @ts-ignore
    let aboutData = await import(`../../pages/about/about.md`)
    return {about: aboutData.metadata}
}