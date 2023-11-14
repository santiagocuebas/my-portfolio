<script lang="ts">
	import { Nav, Home, Portfolio, Contact } from '$lib/index';
</script>

<main>
	<Nav />
	<section id='home'>
		<Home />
	</section>
	<section id='portfolio'>
		<Portfolio />
	</section>
	<section id="contact">
		<Contact />
	</section>
</main>

<style lang="postcss">
	main {
		grid-auto-rows: min-content;
		background-color: #ffffff;
		@apply grid items-center justify-items-center w-full h-full mt-14;
	}

	section {
		@apply grid justify-items-center w-full py-16;
	}

	section:nth-child(2n + 2) {
		background-color: #000000;
	}
</style>
