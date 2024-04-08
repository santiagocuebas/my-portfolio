<script lang="ts">
  import type { IProject } from '../types/global';

  export let project: IProject;

	let counter = 0;
	let version = project.version;

	const preventAction = (e: Event) => e.preventDefault();
</script>

<div id="project">
	<picture>
		{#if version.length && counter !== 0}
			<button class="left" on:click={() => counter--}>
				<i class="fa-solid fa-chevron-left"></i>
			</button>
		{/if}
		{#if version.length && counter !== version.length - 1}
			<button class="right" on:click={() => counter++}>
				<i class="fa-solid fa-chevron-right"></i>
			</button>
		{/if}
		<img decoding="async" loading="lazy" src={project.image} alt={project.name}>
	</picture>
  <div id="content">
		<h2>{project.name}</h2>
		<div class="description">{@html project.description}</div>
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
</div>

<style lang="postcss">
  #project {
		box-shadow: 0 0 4px #bbbbbb;
		@apply flex relative flex-none flex-col content-between w-[300px] h-[600px];
	}

	picture {
		@apply flex relative items-center w-full h-1/2;

		& img {
			@apply w-full h-full object-cover object-top;
		}

		& button {
			@apply hidden absolute [&.left]:left-3 [&.right]:right-3 z-[50];
		}

		& i {
			@apply text-7xl text-[#bbbbbb] hover:text-[#333333];
		}

		&:hover > button {
			@apply flex;
		}
	}

	#content {
		@apply flex flex-wrap content-between w-full h-1/2;

		& h2 {
			@apply w-full text-center text-xl font-bold leading-loose break-words;
		}

		& .description {
			@apply flex-none w-full h-[60%] px-1 text-center overflow-hidden break-words;
		}

		& .techs {
			@apply flex items-center justify-start w-full pl-1.5 overflow-hidden text-xl leading-none font-normal gap-1;

			& img {
				@apply w-6 h-6 object-contain;
			}
		}

		& a {
			@apply w-1/2 py-2 bg-[#d0d0d0] text-center font-bold text-[#505050] cursor-default [&.github]:bg-black [&.deploy]:bg-[#5383d3];
		}

		& .deploy, .github {
			@apply text-white cursor-pointer;
		}
	}
</style>
