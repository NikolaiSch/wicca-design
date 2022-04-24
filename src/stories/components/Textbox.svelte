<script>
	export let text = 'this is a textbox';
	export let type = 'text';
	export let errorMessage = 'Not a valid email';
	export let disabled = false;
	export let error = false;
	export let value = '';
	const id = 'textbox';
</script>

<main>
	{#if type == 'text'}
		{#if error}
			<div class="flex flex-col bg-red-500/10 rounded-lg border-red-500 border">
				<label for={id} class="px-2 py-1 text-lg">Error: {errorMessage}</label>
				<input
					type="text"
					{id}
					{disabled}
					placeholder={text}
					class="appearance-none border-2 rounded-lg bg-red-500/80 border-red-500"
					bind:value
				/>
			</div>
		{:else}
			<input
				{id}
				{disabled}
				placeholder={text}
				class="appearance-none border-2 rounded-lg"
				bind:value
			/>
		{/if}
	{:else if type == 'password'}
		{#if error}
			<div class="flex flex-col bg-red-500/10 rounded-lg border-red-500 border">
				<label for={id} class="px-2 py-1 text-lg">Error: {errorMessage}</label>
				<input
					type="password"
					{id}
					{disabled}
					placeholder={text}
					class="appearance-none border-2 rounded-lg bg-red-500/80 border-red-500"
					bind:value
				/>
			</div>
		{:else}
			<input
				{id}
				{disabled}
				placeholder={text}
				class="appearance-none border-2 rounded-lg"
				bind:value
			/>
		{/if}
	{/if}
</main>

<style>
	main {
		width: var(--width);
	}

	input {
		width: var(--width);
	}

	input {
		padding: var(--y-pad) var(--x-pad);
	}
</style>
