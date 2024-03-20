<script lang="ts">
	import * as icon from '$lib/assets/icons';

  const listOfMainIcons = [icon.js, icon.ts, icon.tcss, icon.svelte, icon.express, icon.cockroachdb, icon.mongodb];
  const listOfIcons = [icon.react, icon.astrojs, icon.nodemailer, icon.socketio, icon.mysql];
</script>

<div class="home">
	<picture>
		<img
			decoding="async"
			loading="lazy"
			src="/profile.jpg"
			alt="Santiago Cuebas"
			title="Photo of perfil"
		>
	</picture>
  <h1>
		Santiago Cuebas
	</h1>
  <h2>
		Junior Full Stack Developer
	</h2>
	<div>
		<p>Hello here! Welcome to my online portfolio.</p>
		<p>
			My name is Santiago Cuebas. I am a autodidact in constant growth and passionate about web development with knowledge in both frontend and backend.
		</p>
	</div>
	<div class="techs">
		<p>I currently work with the following techs:</p>
		{#each listOfMainIcons as icon}
			<img src={icon} alt=''>
		{/each}
		<p>I'm also aware of:</p>
		{#each listOfIcons as icon}
			<img src={icon} alt=''>
		{/each}
	</div>
</div>

<style lang="postcss">
	.home {
		container: home / inline-size;
		@apply relative justify-center w-2/3 min-w-[200px] max-w-[900px] text-white
		[&_div]:my-2;
	}

	picture {
		@apply flex relative float-end justify-center w-[300px] h-[300px] my-2;

		& img {
			@apply w-auto h-full object-contain rounded-xl;
		}
	}

	h1, h2 {
		@apply my-2 text-center text-5xl leading-tight font-bold;
	}

	h2 {
		@apply text-3xl;
	}

	.techs {
		@apply flex flex-wrap gap-2.5 [&_p]:w-full;

		& img {
			@apply w-16 h-16 object-contain object-center rounded-xl;
		}
	}

	@container home (width < 600px) {
		picture {
			@apply float-none m-auto;
		}
	}
</style>
