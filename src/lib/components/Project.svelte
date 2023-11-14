<script lang="ts">
  import type { IProject } from '../types/global';

  export let project: IProject;

	let counter = 0;
	let version = project.version;

	const preventAction = (e: Event) => e.preventDefault();
</script>

<div class="project">
	{#if version.length > 1 && counter !== 0}
		<button class="image-button left" on:click={() => counter--}>
			<i class="fa-solid fa-chevron-left"></i>
		</button>
	{/if}
	{#if version.length > 1 && counter !== version.length - 1}
		<button class="image-button right" on:click={() => counter++}>
			<i class="fa-solid fa-chevron-right"></i>
		</button>
	{/if}
  <img decoding="async" loading="lazy" src={project.image} alt={project.name}>
  <h2>{project.name}</h2>
  <div class="description">{project.description}</div>
  <div class="techs">
		Techs: 
    {#each version[counter].techs as { icon, name }}
      <img src={icon} alt={name} title={name}>
    {/each}
  </div>
  <a
    href={version[counter].deploy}
    class:deploy={version[counter].deploy}
    target="_blank"
    rel="noreferrer"
    on:click={version[counter].deploy ? () => {} : preventAction}
  >
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
    Deploy
  </a>
  <a
		href={version[counter].github}
		class="github"
		target="_blank"
		rel="noreferrer"
	>
    <i class="fa-brands fa-github"></i>
    Github
  </a>
</div>

<style lang="postcss">
  .project {
		min-width: 300px;
		max-width: 300px;
		box-shadow: 0 0 4px #bbbbbb;
		@apply flex relative flex-wrap content-between w-full h-full gap-y-2;
	}

	.project .image-button {
		@apply hidden absolute top-28;
	}

	.project .left {
		@apply left-3;
	}

	.project .right {
		@apply right-3;
	}

	.project .image-button i {
		color: #bbbbbbbb;
		@apply text-7xl;
	}

	.project .image-button i:hover {
		color: #333333;
	}

	.project:hover > .image-button {
		@apply flex;
	}

	.project img {
		height: 300px;
		max-height: 300px;
		@apply w-full object-cover object-top;
	}

	.project h2 {
		@apply w-full text-center text-xl font-bold break-words;
	}

	.project .description {
		height: 116px;
		@apply w-full text-center overflow-hidden break-words;
	}

	.techs {
		@apply flex items-center justify-start w-full pl-1.5 overflow-hidden text-xl leading-none font-normal gap-1;
	}

	.techs img {
		@apply w-6 h-6 object-contain;
	}

	a {
		background-color: #d0d0d0;
		color: #505050;
		@apply block w-1/2 py-2 text-center font-bold cursor-default;
	}

	.deploy, .github {
		background-color: #5383d3;
		color: #ffffff;
		@apply cursor-pointer;
	}

	.github {
		background-color: #000000;
	}
</style>
