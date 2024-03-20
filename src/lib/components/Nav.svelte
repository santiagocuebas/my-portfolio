<script lang="ts">
  import { afterUpdate } from "svelte";
	import { clickOutside } from "../services/click-outside";

	let width: number;
	let visible = true;
	const dataButtons = [
		['home', 'house'],
		['portfolio', 'file'],
		['contact', 'user']
	];

	const isVisible = () => visible = false;

	const toUpperCase = (text: string, firstLetter: string | undefined) => {
		return text.replace(firstLetter as string, firstLetter?.toUpperCase() as string)
	};

	afterUpdate(() => {
		if (width > 624) isVisible();
	});
</script>

<nav bind:clientWidth={width}>
	<img src="/logo-sc.png" alt="Santiago Cuebas">
	{#if visible || width > 624}
		<ul use:clickOutside on:outclick={() => setTimeout(isVisible)}>
			{#each dataButtons as [text, icon]}
				<li>
					<a href='#{text}' on:click={isVisible}>
						<i class="fa-solid fa-{icon}"></i>
						{toUpperCase(text, text.at(0))}
					</a>
				</li>
			{/each}
			{#if width <= 624}
				<li class="curriculum">
					<a
						href="/curriculum.pdf"
						title="download curriculum"
						target="_blank"
						rel="norreferer"
						on:click={isVisible}
					>
						<i class="fa-solid fa-download"></i>
						Download
					</a>
				</li>
			{/if}
		</ul>
	{/if}
	<a
		class="download"
		href="/curriculum.pdf"
		title="download curriculum"
		target="_blank"
		rel="norreferer"
	>
		<p>Curriculum</p>
		<i class="fa-solid fa-download"></i>
	</a>
	<button on:click|preventDefault={() => visible = true}>
		<i class="fa-solid fa-list"></i>
	</button>
</nav>

<style lang="postcss">
	nav {
		container-type: inline-size;
		box-shadow: 0 0 2px #cccccc;
		@apply flex fixed items-center w-full h-14 top-0 p-3 bg-[#5383d3] font-medium text-[#ffffff] gap-x-3 z-[100];
	}

	img {
		@apply w-10 h-10 object-contain object-center;
	}

	ul {
		@apply flex w-min h-min ml-auto leading-tight gap-x-3;

		& i {
			@apply hidden;
		}
	}

	.download {
		@apply flex items-center min-w-10 h-10 px-3 bg-[#33a82f] rounded-full gap-x-1;
	}

	button {
		@apply hidden;
	}

	@container (width <= 600px) {
		ul {
			box-shadow: 0 0 3px #555555;
			@apply absolute flex-wrap w-max max-w-40 py-1 top-12 right-3 bg-white rounded-sm text-black;

			& li {
				@apply flex w-full pl-4 py-1.5 text-lg leading-none cursor-pointer hover:bg-[#505050] hover:text-white [&.curriculum:hover]:bg-[#1e8627];
			}

			& a {
				@apply flex items-center w-full gap-x-2;
			}

			& i {
				@apply flex justify-center w-5;
			}
		}

		button {
			@apply flex ml-auto text-2xl;
		}

		.download {
			@apply hidden;
		}
	}
</style>
