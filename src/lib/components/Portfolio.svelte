<script lang="ts">
  import { mainProjects, projects } from "../services/data";
  import Project from "./Project.svelte";
  import Box from "./Box.svelte";

	let visible = false;
</script>

<div class="container-projects">
  <h1>
		Portfolio
		<span></span>
	</h1>
	<Box validLength={mainProjects.length}>
		{#each mainProjects as project}
			<Project project={project} />
		{/each}
	</Box>
	{#if visible}
		<Box validLength={projects.length}>
			{#each projects as project}
				<Project project={project} />
			{/each}
		</Box>
	{/if}
	<div>
		<button on:click={() => visible = !visible}>
			<i class="fa-solid fa-{visible ? 'minus' : 'plus'}"></i>
			{visible ? 'Mostrar Menos' : 'Mostrar Más'}
		</button>
	</div>
	<div>
		<a href="https://github.com/santiagocuebas" target="_blank">
			<i class="fa-brands fa-github"></i>
			Github Repo
		</a>
	</div>
</div>

<style lang="postcss">
	.container-projects {
		grid-auto-rows: min-content;
		container-type: inline-size;
		@apply grid justify-items-center w-2/3 min-w-[360px] gap-y-2.5;

		& div {
			@apply justify-self-center flex items-center justify-center w-96 h-0.5 my-5 bg-black rounded-full [&_i]:text-[20px];

			@container (width < 680px) {
				@apply w-64;
			}
		}
	}

	h1 {
		@apply grid w-min justify-items-center mb-2 text-5xl leading-tight font-bold gap-y-8;

		& span {
			@apply w-20 h-2 bg-black;
		}
	}

	button, a {
		box-shadow: 0 0 0 2px #000000;
		@apply flex items-center justify-center w-40 py-1 bg-white rounded-3xl gap-x-1.5 font-semibold;
	}
</style>
