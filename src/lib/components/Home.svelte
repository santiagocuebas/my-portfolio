<script lang="ts">
  const listOfIcons = ['js', 'ts', 'tcss', 'svelte', 'react', 'express', 'socketio', 'mysql', 'mongodb'];
</script>

<div class="home">
	<img
		class="perfil"
		decoding="async"
		loading="lazy"
		src="/holder.jpg"
		alt="Santiago Cuebas"
		title="Photo of perfil"
	>
  <h1>Santiago Cuebas</h1>
  <h2>Junior Full Stack Developer</h2>
	<div class="about">
		<p>Hello here! Welcome to my online portfolio.</p>
		<p>
			My name is Santiago Cuebas. I am a autodidact in constant growth and passionate about web development with knowledge in both frontend and backend.
		</p>
	</div>
	<div class="techs">
		<p>I currently work with the following techs:</p>
		{#each listOfIcons as icon}
			<img class="icon" src="/icons/{icon}.png" alt={icon}>
		{/each}
	</div>
</div>

<style lang="postcss">
	.home {
		grid-template-columns: 1fr 300px;
		grid-auto-rows: min-content min-content 1fr min-content;
		max-width: 900px;
		min-width: 300px;
		color: #ffffff;
		container: home / inline-size;
		@apply grid relative w-2/3 gap-y-2.5;
	}

	.perfil {
		grid-column: 2 / span 1;
		grid-row: 1 / span 3;
		width: 300px;
		height: 300px;
		@apply justify-self-center top-0 right-0 rounded-full object-cover object-center;
	}

	h1, h2 {
		@apply self-center text-center text-5xl leading-tight font-bold;
	}

	h2 {
		@apply text-3xl;
	}

	.techs {
		grid-column: 1 / span 2;
		@apply flex flex-wrap gap-2.5;
	}

	.techs p {
		@apply w-full;
	}

	.techs .icon {
		@apply w-16 h-16 object-contain object-center rounded-xl;
	}

	@container home (width < 600px) {
		.perfil, h1, h2, .about {
			grid-column: 1 / span 2;
		}

		.perfil {
			grid-row: 1 / span 1;
		}
	}
</style>
