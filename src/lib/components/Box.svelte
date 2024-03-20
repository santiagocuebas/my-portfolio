<script lang="ts">
  import { afterUpdate } from "svelte";

	export let validLength: number;

	let boxElement: HTMLDivElement;
	let width: number;
	let occult = false;
	let scrollX = 0;

	function scrollTo(scroll: number) {
		scrollX = scrollX + scroll;
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

		& div {
			scrollbar-width: none;
			@apply flex justify-start w-min max-h-min p-[5px] overflow-y-auto gap-5;
		}

		@container (width <= 680px) {
			@apply w-[360px];
		}

		@container (width > 680px) and (width <= 1000px) {
			@apply w-[680px];
		}

		@container (width > 1000px) {
			@apply w-[1000px];
		}
	}

	button {
		@apply flex-none w-[25px] text-[48px] text-black disabled:text-[#b1abab] [&.occult]:invisible;

		@container (width < 400px) {
			& i {
				@apply text-[36px];
			}
		}
	}
</style>
