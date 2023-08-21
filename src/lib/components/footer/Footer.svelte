<script lang="ts">
	import facebook from './facebook.svg';
	import instagram from './instagram.svg';
	import telegram from './telegram.svg';
</script>

<footer>
	<div class="container reset flex col">
		<div class="footer flex">
			<p>Copyright © 2022</p>
			<div class="icons">
				<a href="https://www.instagram.com/klochanyk/"
					><img src={instagram} alt="instagram icon" /></a
				>
				<a href="https://www.facebook.com/profile.php?id=100009208244367"
					><img src={facebook} alt="facebook icon" /></a
				>
				<a href="https://t.me/klochanyk"><img src={telegram} alt="telegram icon" /></a>
			</div>
		</div>
	</div>
</footer>

<style>
	.icons {
		margin-left: auto;
	}
	img {
		height: 20px;
	}
	a:nth-of-type(2n) {
		margin: 0 10px;
	}
	footer {
		margin-bottom: 45px;
		padding-top: 30px;
	}
</style>
