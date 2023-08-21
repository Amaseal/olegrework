<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserver once {element} bind:intersecting>
	<div bind:this={element} class="wrapper">
		{#if intersecting}
			<slot />
		{/if}
	</div>
</IntersectionObserver>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
