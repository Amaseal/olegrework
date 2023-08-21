<script lang="ts">
	import DesktopNav from './desktopnav/DesktopNav.svelte';
	import MobileNav from './mobilenav/MobileNav.svelte';
	import logo from './olegs-logo.svg';
	let height: number;
	let width: number;
</script>

<svelte:window bind:scrollY={height} bind:innerWidth={width} />

<header class:scrolled={height > 20}>
	<div class="container reset flex center">
		<a href="/">
			<img src={logo} alt="Klochanyk Logo" />
		</a>
		{#if width < 600}
			<MobileNav />
		{:else}
			<DesktopNav />
		{/if}
	</div>
</header>

<style>
	img {
		height: 35px;
	}
	header {
		position: fixed;
		top: 0;
		width: 100%;
		padding: 65px 0;
		z-index: 99999;
		transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
	}
	.scrolled {
		background-color: var(--background);
		padding: 20px 0;
	}
	@media screen and (max-width: 600px) {
		header {
			padding: 20px 0;
		}
		img {
			padding: 0 20px;
		}
	}
</style>
