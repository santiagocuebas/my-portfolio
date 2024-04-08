<script lang="ts">
	import { Nav, Home, Portfolio, Contact } from '$lib/index';
</script>

<main>
	<Nav />
	<section id='principal'>
		<Home />
	</section>
	<section id='portfolio'>
		<Portfolio />
	</section>
	<section id="contacto">
		<Contact />
	</section>
</main>

<style lang="postcss">
	main {
		grid-auto-rows: min-content;
		@apply grid items-center justify-items-center w-full h-full mt-14 bg-white;
	}

	section {
		@apply grid justify-items-center w-full py-16;

		&:nth-child(2n + 2) {
			@apply bg-black;
		}
	}
</style>
