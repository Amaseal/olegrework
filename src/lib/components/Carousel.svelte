<script lang="ts">
	export let images: string[];

	let index = 1;
	setInterval(() => {
		if (index > images.length) {
			index = 1;
		}
		index = (index + 1) % images.length;
	}, 4000);
	const goToSlide = (idNumber: number) => (index = idNumber);
</script>

<div class="wrapper">
	{#each [images[index]] as image}
		<img src={image} alt="" />
	{/each}
	<div class="flex center middle">
		{#each images as _, i}
			<div class="dot" class:selected={i === index} on:click={() => goToSlide(i)} />
		{/each}
	</div>
</div>

<style>
	img {
		height: 550px;
		width: 100%;
	}
	.wrapper {
		width: 60%;
		margin-left: auto;
	}
	.dot {
		height: 15px;
		width: 15px;
		background-color: transparent;
		border: 2px solid var(--off-white);
		margin: 10px;
		border-radius: 50%;
	}
	.dot:hover {
		background-color: #e8eaef;
		cursor: pointer;
	}
	.selected {
		background-color: #797a7d;
	}
	@media screen and (max-width: 600px) {
		.wrapper {
			width: 100%;
		}
		img {
			height: 250px;
		}
	}
</style>
