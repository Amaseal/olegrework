<script>
	import Wrapper from '$lib/components/Wrapper.svelte';

	import facebook from '$lib/components/footer/facebook.svg';
	import instagram from '$lib/components/footer/instagram.svg';
	import telegram from '$lib/components/footer/telegram.svg';
	import logo from '$lib/components/header/olegs-logo.svg';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<section>
	<Wrapper>
		<div class="container flex col middle center">
			<div class="heading">
				<h1>CONTACTS</h1>
				<img
					in:fade={{ duration: 1200, delay: 50 }}
					out:fade={{ duration: 50 }}
					class="background"
					src={logo}
					alt="logo"
				/>
			</div>

			<div class="icons">
				<a href="https://www.instagram.com/klochanyk/"
					><img class="icon" src={instagram} alt="instagram icon" /></a
				>
				<a href="https://www.facebook.com/profile.php?id=100009208244367"
					><img class="icon" src={facebook} alt="facebook icon" /></a
				>
				<a href="https://t.me/klochanyk"><img class="icon" src={telegram} alt="telegram icon" /></a>
			</div>
			<p>klochanyk@gmail.com</p>
		</div>
	</Wrapper>
</section>

<style>
	.background {
		opacity: 0.1;
		position: absolute;
		top: 0;
		z-index: -10;
		height: 200px;
		left: 50%;
		transform: translateX(-50%);
	}
	.heading {
		position: relative;
		padding: 72px 0;
		margin-bottom: 87px;
	}
	.icon {
		height: 30px;
		margin: 10px;
	}
	section {
		height: 100vh;
	}
	h1 {
		font-size: 60px;
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 10px;
	}
	.icons {
		margin-bottom: 30px;
	}
	p {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 22px;
		letter-spacing: 5px;
	}
</style>
