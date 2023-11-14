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
						href="http://localhost:3000/curriculum.pdf"
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
		href="http://localhost:3000/curriculum.pdf"
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
		background-color: #5383d3;
		box-shadow: 0 0 2px #cccccc;
		color: #ffffff;
		z-index: 100;
		@apply flex items-center fixed top-0 w-full h-14 p-3 font-medium gap-x-3;
	}

	img {
		@apply w-10 h-10 object-contain object-center;
	}

	ul {
		@apply flex w-min h-min ml-auto leading-tight gap-x-3;
	}

	li i {
		@apply hidden;
	}

	.download {
		min-width: 40px;
		background-color: #33a82f;
		@apply flex items-center h-10 px-3 rounded-full gap-x-1;
	}

	button {
		@apply hidden;
	}

	@container (width <= 600px) {
		ul {
			max-width: 160px;
			background-color: #ffffff;
			box-shadow: 0 0 3px #555555;
			color: #000000;
			@apply absolute flex-wrap w-max py-1 top-12 right-3 rounded-sm;
		}

		ul li {
			@apply flex w-full pl-4 py-1.5 text-lg leading-none cursor-pointer;
		}

		ul li:hover {
			background-color: #505050;
			color: #ffffff;
		}

		.curriculum:hover {
			background-color: #1e8627;
		}

		ul a {
			@apply flex items-center w-full gap-x-2;
		}

		ul i {
			@apply flex justify-center w-5;
		}

		button {
			@apply flex ml-auto text-2xl;
		}

		.download {
			@apply hidden;
		}
	}
</style>
