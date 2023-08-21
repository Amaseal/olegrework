<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	export let link: string;
	export let text: string;
</script>

<li class:active={$page.url.pathname === link} transition:slide={{ duration: 500, delay: 150 }}>
	<a href={link}>{text}</a>
</li>

<style>
	a {
		padding: 5px 10px;
		transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
	}
	a:hover {
		color: var(--accent-color);
	}

	.active {
		font-weight: 700;
		color: var(--accent-color);
	}
	@media screen and (max-width: 600px) {
		a {
			font-size: 3.5rem;
		}
		li {
			padding: 30px 0;
		}
	}
</style>
