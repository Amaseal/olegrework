<script>
	export let data;
	import Gallery from '$lib/components/Gallery.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Gallery items={data.posts} />
