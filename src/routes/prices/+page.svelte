<script>
	export let data;

	import SvelteMarkdown from 'svelte-markdown';
	import Carousel from '$lib/components/Carousel.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Prices</title>
</svelte:head>

<section>
	<div class="container narrow">
		<div class="headingWrapper">
			<Wrapper>
				<h1 in:fly={{ x: -100, duration: 1000, delay: 75 }} out:fly={{ x: -100, duration: 50 }}>
					{data.prices.heading}
				</h1>
			</Wrapper>
		</div>

		<div class="prices">
			{#each data.prices.prices as price}
				<div class="price">
					<div class="imgwrapper">
						<Wrapper>
							<img
								src={price.image}
								alt={price.price}
								in:fade={{ duration: 1200, delay: 75 }}
								out:fade={{ duration: 50 }}
							/>
						</Wrapper>
					</div>
					<h3>{price.price}</h3>
					<SvelteMarkdown source={price.description} />
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="second">
	<div class="container flex space narrow">
		<Wrapper>
			<h2
				class="logo"
				in:fly={{ x: -100, duration: 1000, delay: 75 }}
				out:fly={{ x: -100, duration: 50 }}
			>
				{data.prices.logo_section.title}
			</h2>
		</Wrapper>
		<Wrapper>
			<div
				class="text"
				in:fly={{ y: 100, duration: 1000, delay: 75 }}
				out:fly={{ y: 100, duration: 50 }}
			>
				<SvelteMarkdown source={data.prices.logo_section.description} />
			</div>
		</Wrapper>
	</div>
</section>
<section class=" third">
	<div class="container flex center narrow carousel">
		<div class="info">
			<Wrapper>
				<h2 in:fly={{ x: -100, duration: 1000, delay: 75 }} out:fly={{ x: -100, duration: 50 }}>
					{data.prices.slider.title}
				</h2>
			</Wrapper>
			<Wrapper>
				<div in:fly={{ y: 100, duration: 1000, delay: 75 }} out:fly={{ y: 100, duration: 50 }}>
					<SvelteMarkdown source={data.prices.slider.description} />
				</div>
			</Wrapper>
		</div>
		<Carousel images={data.prices.slider.images} />
	</div>
</section>

<style>
	img {
		height: 200px;
	}
	.imgwrapper {
		height: 200px;
	}
	.headingWrapper {
		height: 100px;
	}
	h1 {
		margin-bottom: 160px;
	}
	h1,
	h2 {
		font-size: clamp(3.2rem, 2.8vw, 60px);
		letter-spacing: clamp(0.794rem, 10.8px, 1rem);
		text-transform: uppercase;
		font-weight: 300;
		line-height: 1.2;
		margin-bottom: 60px;
	}
	h2,
	h3 {
		color: var(--pure-white);
	}
	h3 {
		margin-top: 10px;
		font-weight: 100;
	}
	.prices {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		justify-content: center;
		gap: 20px;
		width: 100%;
	}
	.price {
		max-width: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 500px;
	}
	.text {
		min-width: 60%;
		margin-left: auto;
	}
	.info {
		max-width: 40%;
	}

	@media screen and (max-width: 600px) {
		.second > .container {
			flex-direction: column;
		}
		.text {
			max-width: 100%;
		}
		.third > .container {
			flex-direction: column;
		}
		.info {
			max-width: 100%;
			margin-bottom: 60px;
		}
		.container {
			padding-top: 65px;
			padding-bottom: 65px;
		}
		.carousel {
			padding-right: 20px;
		}
		.prices {
			gap: 100px;
		}
		.headingWrapper {
			height: 200px;
		}
	}
</style>
