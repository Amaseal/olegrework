<script>
	export let data;
	import { fade, fly } from 'svelte/transition';

	import Wrapper from '$lib/components/Wrapper.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<Wrapper>
		<div class="container flex middle center">
			<img
				src={data.about.featured_image}
				alt="oleg klochanyk"
				in:fade={{ duration: 1200, delay: 75 }}
				out:fade={{ duration: 50 }}
			/>
			<div class="text">
				<h1 in:fly={{ x: -100, duration: 1000, delay: 75 }} out:fly={{ x: -100, duration: 50 }}>
					{data.about.title}
				</h1>
				<p in:fly={{ y: 100, duration: 1000, delay: 75 }} out:fly={{ y: 100, duration: 50 }}>
					{data.about.description}
				</p>
			</div>
		</div>
	</Wrapper>
</section>

<style>
	.container {
		width: 100%;
	}
	section {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}
	img {
		height: 425px;
	}
	p {
		max-width: 50ch;
		margin-left: 35px;
		font-size: 17px;
		line-height: 27px;
	}
	h1 {
		font-size: clamp(3.2rem, 3vw, 60px);
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 10px;
		padding-bottom: 40px;
		position: relative;
		left: -100px;
	}
	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		section {
			padding-top: 100px;
		}
		h1 {
			right: 20px;
			left: auto;
			position: absolute;
			top: 0;
			text-align: end;
			width: 70vw;
		}
		img {
			width: 70vw;
			height: 100%;
			margin-top: 50px;
		}
		p {
			margin-left: 0;
			margin-top: 50px;
			margin-bottom: 100px;
		}
	}
</style>
