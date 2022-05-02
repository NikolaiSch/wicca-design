<script>
	import '../css/app.css';
	import { createEventDispatcher } from 'svelte';

	import Textbox from '../components/formInput/Textbox.svelte';
	import Checkbox from '../components/formInput/Checkbox.svelte';
	import Button from '../components/Buttons/Button.svelte';

	const dispatch = createEventDispatcher();

	let username = '';
	let password = '';

	/**
	 * @param {any} event
	 */
	function onLogin(event) {
		dispatch('onLogin', event);
	}

	function onReset() {
		password = '';
		username = '';
	}
</script>

<main class="inline-flex flex-col bg-slate-300 px-16 py-10 rounded-lg" id="LoginBox">
	<h1 class="text-2xl text-gray-700 pb-4">Login to your account</h1>
	<div class="py-4">
		<Textbox
			text="Username"
			errorMessage="Incorrect Email"
			--x-pad="20px"
			--y-pad="10px"
			type="text"
			bind:value={username}
		/>
	</div>
	<div class="pb-4">
		<Textbox
			text="Password"
			errorMessage="Incorrect Password"
			--x-pad="20px"
			--y-pad="10px"
			type="password"
			bind:value={password}
		/>
	</div>
	<Checkbox --color="#3596cf" --size="20px">Remember My account?</Checkbox>
	<div class="pt-4 mx-auto">
		<Button color="primary" size="small" on:click={onLogin}>Login</Button>
		<Button color="tertiary" style="ghost" size="small" on:click={onReset}>Reset</Button>
	</div>
</main>
