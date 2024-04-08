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
		Desarrollador Junior Full Stack
	</h2>
	<div>
		<p>!Buenas! Bienvenida a mí portfolio online.</p>
		<p>
			Mí nombre es Santiago Cuebas. Soy un autodidacta en constante crecimiento y apasianado sobre el desarrollo web con conocimiento tanto en frontend como en backend.
		</p>
	</div>
	<div class="techs">
		<p>Actualmente trabajo con las siguientes techs:</p>
		{#each listOfMainIcons as icon}
			<img src={icon} alt=''>
		{/each}
		<p>También tengo conocimiento de:</p>
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
