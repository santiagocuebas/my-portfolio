<script lang="ts">
	import type { ResponseData } from "$lib/types/global";
  import { FormMessage } from "$lib/services/dictionary";

	let visible = false;
	let disabled = false;
	let className: ResponseData;
	let name = '';
	let email = '';
	let text = '';

	const checkEmail = (email: string) => {
		return typeof email === 'string' &&
			email.length > 0 &&
  		/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
	};

	async function handleSubmit(this: HTMLFormElement) {
		disabled = true;

		const data: ResponseData = await fetch(this.action, {
			method: this.method,
			body: new FormData(this),
			credentials: 'same-origin'
		}).then(res => res.json());

		className = data; 
		visible = true;
		disabled = false;

		if (data === 'success') {
			name = '';
			email = '';
			text = '';

			setTimeout(() => visible = false, 5000);
		}
	}
</script>

<div class="contact">
	<h2>Contact me</h2>
	<p>You can contact me by sending an email</p>
	<form
		action="/api/send"
		method="post"
		on:submit|preventDefault={handleSubmit}
	>
		{#if visible}
			<div class={className}>{FormMessage[className]}</div>
		{/if}
		<label>
			Name:
			<input type="text" name="name" placeholder="Enter your name" bind:value={name} maxlength="40">
		</label>
		<label>
			Email:
			<input type="email" name="email" placeholder="Enter your email" bind:value={email} maxlength="255">
		</label>
		<label>
			Message:
			<textarea name="message" placeholder="Enter your message" bind:value={text} maxlength="240" rows="5" spellcheck="false"></textarea>
		</label>
		<button disabled={disabled || !name.length || !text.length || !checkEmail(email)}>
			Submit
		</button>
	</form>
</div>

<style lang="postcss">
	.contact {
		min-width: 300px;
		max-width: 500px;
		@apply grid justify-center w-2/3 gap-y-4;
	}

	h2 {
		color: #ffffff;
		@apply w-max m-auto text-5xl font-bold leading-none;
	}

	p {
		color: #ffffff;
		@apply w-full overflow-hidden break-words text-center leading-tight;
	}

	form {
		background-color: #ffffff;
		color: #000000;
		@apply flex flex-wrap justify-center w-full p-4 rounded gap-y-3;
	}

	form div {
		@apply w-full p-3 text-center text-lg leading-none rounded-lg;
	}

	.success {
		background-color: #9eeb9c;
		border: 1px solid #1a720f;
		box-shadow: 0 0 0 1px #1a720f;
	}

	.warn {
		background-color: #eaeb9c;
		border: 1px solid #70720f;
		box-shadow: 0 0 0 1px #70720f;
	}

	.error {
		background-color: #eb9c9c;
		border: 1px solid #720f0f;
		box-shadow: 0 0 0 1px #720f0f;
	}

	label {
		@apply grid w-full font-medium leading-none gap-y-1.5;
	}

	input, textarea {
		box-shadow: 0 0 1px #404040;
		@apply p-2 font-normal rounded-lg;
	}

	input:focus, textarea:focus {
		box-shadow: 0 0 0 2px #5383d3;
	}

	button {
		background-color: #5383d3;
		color: #ffffff;
		@apply px-12 py-2 text-2xl leading-none font-medium rounded-lg;
	}

	button[disabled] {
		background-color: #dddddd;
		color: #666666;
	}
</style>
