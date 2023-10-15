<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>Oleg klochanyk - portfolio</title>
	<meta name="description" content="Oleg klochanyk's personal portfolio" />
	<meta name="keywords" content="logo design, graphic design, portfolio" />
</svelte:head>

<Hero />
<Gallery items={data.posts} />
