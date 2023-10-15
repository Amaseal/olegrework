<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Wrapper from '$lib/components/Wrapper.svelte';

	export let data;
	console.log(data.content);

	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<section>
	<div class="container flex">
		<div class="text">
			<Wrapper>
				<h1 in:fly={{ x: -100, duration: 1000, delay: 75 }} out:fly={{ x: -100, duration: 50 }}>
					{data.post.title}
				</h1>
			</Wrapper>
			<Wrapper>
				<div in:fly={{ y: 100, duration: 1000, delay: 75 }} out:fly={{ y: 100, duration: 50 }}>
					<SvelteMarkdown source={data.content.html} />
				</div>
			</Wrapper>
		</div>
		<div class="images">
			{#each data.post.images as image}
				<img src={image} alt={data.post.title} />
			{/each}
		</div>
	</div>
</section>

<style>
	:global(a) {
		color: var(--accent-color);
		font-weight: 500;
	}
	h1 {
		font-size: 38px;
		margin-bottom: 10px;
		line-height: 44px;
	}

	.text {
		width: 25%;
		position: sticky;
		top: 90px;
		padding-right: 20px;
		align-self: flex-start;
	}
	.images {
		width: 75%;
	}
	img {
		width: 100%;
		display: block;
	}
	@media screen and (max-width: 1000px) {
		.text {
			width: 40%;
			padding: 0 20px;
		}
		.images {
			width: 60%;
		}
	}

	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column;
		}
		.text {
			width: 100%;
			position: static;
			padding: 20px 0;
		}
		.images {
			width: 100%;
		}
		section {
			padding-bottom: 60px;
		}
	}
</style>
