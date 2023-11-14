<script lang="ts">
  import { afterUpdate } from "svelte";

	export let validLength: number;

	let boxElement: HTMLDivElement;
	let width: number;
	let occult = false;
	let scrollX = 0;

	function scrollTo(scroll: number) {
		scrollX = boxElement.scrollLeft + scroll;
		boxElement.scrollTo({ left: scrollX, behavior: 'smooth' });
	};

	afterUpdate(() => {
		if (
			(width === 310 && validLength > 1) ||
			(width === 630 && validLength > 2) ||
			(width === 950 && validLength > 3)
		) occult = false;
		else {
			occult = true;
			scrollX = 0;
		}
	});
</script>

<div class="box-project">
	<button
		class:occult={occult}
		disabled={scrollX <= 0}
		on:click={() => scrollTo(-320)}
	><i class="fa-solid fa-caret-left"></i></button>
	<div bind:this={boxElement} bind:clientWidth={width}>
		<slot></slot>
	</div>
	<button
		class:occult={occult}
		disabled={width >= boxElement?.scrollWidth - scrollX}
		on:click={() => scrollTo(320)}
	><i class="fa-solid fa-caret-right"></i></button>
</div>

<style lang="postcss">
	.box-project {
		@apply flex items-center justify-center w-full;
	}

	.box-project div {
		padding: 5px;
		scrollbar-width: none;
		@apply flex justify-start w-min max-h-min overflow-y-auto gap-5;
	}

	button {
		width: 25px;
		min-width: 25px;
		max-width: 25px;
		color: #000000;
		@apply text-5xl leading-none;
	}

	.occult {
		@apply invisible;
	}

	button[disabled] {
		color: #b1abab;
	}

	@container (width < 400px) {
		.fa-caret-left, .fa-caret-right {
			@apply text-4xl;
		}
	}
	
	@container (width <= 680px) {
		.box-project {
			width: 360px;
		}
	}

	@container (width > 680px) and (width <= 1000px) {
		.box-project {
			width: 680px;
		}
	}

	@container (width > 1000px) {
		.box-project {
			width: 1000px;
		}
	}
</style>
