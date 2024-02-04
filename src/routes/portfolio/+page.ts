import { error } from '@sveltejs/kit'
//@ts-ignore
export async function load({ fetch }) {
    try {
        const res = await fetch('/api/portfolio')
        const posts = await res.json()

		return {
            posts
      
		}
	} catch (e) {
		throw error(404, `Could not find products`)
	}
}