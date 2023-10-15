<script lang="ts">
	import type { Portfolio } from '$lib/types';
	import IntersectionObserver from 'svelte-intersection-observer';

	export let item: Portfolio;

	let element: HTMLElement;
	let intersecting: boolean;
	let rootMargin = '-50%';

	import { fade } from 'svelte/transition';
</script>

<IntersectionObserver {element} bind:intersecting {rootMargin}>
	<a
		class:intersecting
		href="/portfolio/{item.slug}"
		class="item"
		bind:this={element}
		in:fade={{ delay: 50 }}
		out:fade={{ duration: 50 }}
	>
		<img src={item.thumbnail} alt={item.title} />
		<p>{item.title}</p>
	</a>
</IntersectionObserver>

<style>
	img {
		height: 335px;
		width: 100%;
		object-fit: cover;
		display: block;
	}
	a {
		filter: grayscale(1);
		position: relative;
		transition: filter 0.2s ease-in-out;
	}
	a:hover {
		filter: none;
	}
	p {
		padding: 20px;
		background: var(--pure-white);
		opacity: 0;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		color: var(--background);
		transition: opacity 0.2s ease-in-out;
	}
	a:hover > p {
		opacity: 1;
	}

	@media screen and (max-width: 600px) {
		.intersecting {
			filter: grayscale(0);
		}
		img {
			height: 250px;
		}
	}
</style>
