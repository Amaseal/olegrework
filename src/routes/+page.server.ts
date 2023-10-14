export const load = async () => {
    const res = await fetch("/api/portfolio")
    const items = res.json()
    return items
};