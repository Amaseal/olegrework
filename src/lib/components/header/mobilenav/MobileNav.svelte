<script lang="ts">
	import Navlink from '$lib/components/Navlink.svelte';
	import Hamburger from './Hamburger.svelte';
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<div class="nav-button">
	<Hamburger {open} {onClick} />
</div>
{#if open}
	<nav>
		<ul class="flex col middle navmenu">
			<div class="wrapper" on:click={onClick}>
				<Navlink text="Portfolio" link="/portfolio" />
			</div>
			<div class="wrapper" on:click={onClick}>
				<Navlink text="About" link="/about" />
			</div>
			<div class="wrapper" on:click={onClick}>
				<Navlink text="Contacts" link="/contacts" />
			</div>
			<div class="wrapper" on:click={onClick}>
				<Navlink text="Price" link="/prices" />
			</div>
		</ul>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: 9999;
		background-color: var(--background);
		padding: 100px 40px;
	}
	.nav-button {
		margin-left: auto;
	}
</style>
