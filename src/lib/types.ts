export type Categories = 'sveltekit' | 'svelte'

export type Portfolio = {
	layout: string
	title: string
	description: string
	date: string
	thumbnail: string
	images: string[]
	slug: string
}