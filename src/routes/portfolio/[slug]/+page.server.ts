import type { Portfolio } from '$lib/types.js'
import { error } from '@sveltejs/kit'
//@ts-ignore
export async function load({ params }) {

	try {
		const post = await import(`../../../portfolio/posts/${params.slug}.md`)
		return {
            post: post.metadata as Portfolio,
            content: post.default.render()
      
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}