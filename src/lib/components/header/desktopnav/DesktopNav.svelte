<script lang="ts">
	import Navlink from '$lib/components/Navlink.svelte';
</script>

<nav>
	<ul class="flex middle navmenu">
		<Navlink text="Portfolio" link="/portfolio" />
		<Navlink text="About" link="/about" />
		<Navlink text="Contacts" link="/contacts" />
		<Navlink text="Price" link="/prices" />
	</ul>
</nav>

<style>
	nav {
		margin-left: auto;
	}
</style>
