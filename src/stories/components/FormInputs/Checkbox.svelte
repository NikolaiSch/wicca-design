<script>
	export let checked = true;
	export let id = 'button';
	export let showText = true;
	export let disabled = false;
	export let debug = false;
</script>

<main>
	<div class="flex flex-row align-middle">
		{#if disabled}
			<input
				{id}
				type="checkbox"
				bind:checked
				{disabled}
				class="appearance-none border border-gray-400 rounded-md bg-gray-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
			/>
		{:else}
			<input
				{id}
				type="checkbox"
				bind:checked
				{disabled}
				class="appearance-none border border-gray-300 rounded-md bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
				content="Y"
			/>
		{/if}

		{#if showText}
			<label for={id} class="form-check-label inline-block text-gray-800"><slot /></label>
		{/if}
	</div>
	{#if debug}
		<p class="mt-6">Checked status: {checked}</p>
	{/if}
</main>

<style>
	input:checked {
		background-color: var(--color);
		border-color: var(--color);
	}
	input {
		width: var(--size);
		height: var(--size);
	}

	label {
		font-size: calc(var(--size) * 0.8);
	}

	input:checked::after {
		position: relative;
		content: '✓';
		color: white;
		font-size: calc(var(--size) * 1.1);
		bottom: calc(var(--size) * 0.35);
		left: calc(var(--size) * 0.16);
	}
</style>
