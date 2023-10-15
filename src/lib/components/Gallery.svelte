<script lang="ts">
	import type { Portfolio } from '$lib/types';
	export let items: Portfolio[];
	import Item from '$lib/components/Item.svelte';
</script>

<section>
	<div class="container">
		<div class="items">
			{#each items as item}
				<Item {item} />
			{/each}
		</div>
	</div>
</section>

<style>
	.items {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(32.2%, 1fr));
		gap: 20px;
		padding: 65px 110px 0 110px;
	}

	@media screen and (max-width: 600px) {
		.items {
			padding: 65px 0;
			grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
		}
	}
</style>
