<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(*) {
		font-family: 'Roboto', 'Courier New', Courier, monospace;
		@apply m-0 p-0 box-border;
	}

	:global(textarea) {
		@apply resize-none;
	}
</style>
