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
	<h2>
		Contactame
	</h2>
	<p>Puedes contactarme enviando un email</p>
	<form
		action="/api/send"
		method="post"
		on:submit|preventDefault={handleSubmit}
	>
		{#if visible}
			<div class={className}>{FormMessage[className]}</div>
		{/if}
		<label>
			Nombre:
			<input type="text" name="name" placeholder="Ingresa tú nombre" bind:value={name} maxlength="40">
		</label>
		<label>
			Email:
			<input type="email" name="email" placeholder="Ingresa tú email" bind:value={email} maxlength="255">
		</label>
		<label>
			Mensaje:
			<textarea name="message" placeholder="Ingresa tú mensaje" bind:value={text} maxlength="240" rows="5" spellcheck="false"></textarea>
		</label>
		<button
			disabled={disabled || !name.length || !text.length || !checkEmail(email)}
		>Enviar</button>
	</form>
</div>

<style lang="postcss">
	.contact {
		@apply grid justify-center w-2/3 min-w-[300px] max-w-[500px] gap-y-4;
	}

	h2 {
		@apply w-max m-auto text-[48px] font-bold text-white;
	}

	p {
		@apply w-full overflow-hidden break-words text-center text-[18px] font-medium text-white leading-tight;
	}

	form {
		@apply flex flex-wrap justify-center w-full p-4 rounded bg-white text-black gap-y-3;

		& div {
			border: 1px solid #1a720f;
			box-shadow: 0 0 0 1px #1a720f;
			@apply w-full p-3 bg-[#9eeb9c] text-center text-[18px] rounded-lg;

			&.warn {
				border: 1px solid #70720f;
				box-shadow: 0 0 0 1px #70720f;
				@apply bg-[#eaeb9c];
			}

			&.error {
				border: 1px solid #720f0f;
				box-shadow: 0 0 0 1px #720f0f;
				@apply bg-[#eb9c9c];
			}
		}
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
		@apply px-12 py-2 bg-[#5383d3] rounded-lg text-[24px] font-medium text-white
		disabled:bg-[#dddddd] disabled:text-[#666666];
	}
</style>
