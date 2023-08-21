<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Wrapper from '../Wrapper.svelte';
</script>

<section>
	<Wrapper>
		<div class="container flex center middle">
			<div class="text flex">
				<div class="flex col end vert">
					<h1
						class="small"
						in:fly={{ y: -100, duration: 1000, delay: 75 }}
						out:fly={{ y: -100, duration: 50 }}
					>
						OLEG
					</h1>
					<p in:fly={{ x: -100, duration: 1000, delay: 75 }} out:fly={{ x: -100, duration: 50 }}>
						Graphic designer
					</p>
				</div>
				<h1
					class="large"
					in:fly={{ y: 100, duration: 1000, delay: 75 }}
					out:fly={{ y: 100, duration: 50 }}
				>
					KLOCHANYK
				</h1>
			</div>
			<img
				src="images/homepage photo 2.png"
				alt=""
				in:fade={{ duration: 1200, delay: 75 }}
				out:fade={{ duration: 50 }}
			/>
		</div>
	</Wrapper>
</section>

<style>
	.container {
		padding-top: 0;
		padding-bottom: 0;
	}

	.text {
		position: relative;
		z-index: 20;
		margin-right: -45px;
		/* max-width: 100%; */
		margin-top: -40px;
	}
	.large {
		font-family: 'Barlow Condensed', sans-serif;
		font-size: clamp(4.9rem, 5.5vw, 127px);
		letter-spacing: 7px;
		text-transform: uppercase;
		transform: rotate(180deg);
		text-align: center;
		margin-top: -10px;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.small {
		font-size: clamp(3.37rem, 4vw, 86px);
		font-weight: 300;
		line-height: 0.7;
		transform: rotate(180deg);
	}
	h1 {
		writing-mode: vertical-lr;
		line-height: 1;
	}
	p {
		color: var(--accent-color);
		font-size: clamp(1.2rem, 1.6vw, 2.1rem);
		max-width: 120px;
		line-height: 1;
		text-align: end;
		margin-top: 7px;
	}
	img {
		top: 0;
		max-width: 100%;
		left: 50%;
		max-height: min(90%, 100vh);
	}
	section {
		height: 100vh;
	}
	@media screen and (max-width: 600px) {
		img {
			top: 0;
			max-width: 100%;
			left: 50%;
			max-height: min(70%, 100vh);
		}
		p {
			width: 100%;
		}
		.vert {
			width: 80px;
		}
	}
</style>
