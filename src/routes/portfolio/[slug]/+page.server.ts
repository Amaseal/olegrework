import type { Portfolio } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {

	try {
		const post = await import(`../../../portfolio/posts/${params.slug}.md`)
		return {
            post: post.metadata as Portfolio,
      
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}