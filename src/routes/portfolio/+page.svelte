<script>
	export let data;
	import Gallery from '$lib/components/Gallery.svelte';
</script>

<Gallery items={data.posts} />
