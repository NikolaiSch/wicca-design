<script>
	import '../css/app.css';
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';

	export let size = 'medium';
</script>

<div class="flex flex-row bg-white px-4 py-2 justify-between">
	<div class="pl-4">
		<Logo />
	</div>
	<div class="my-auto">
		<Button {size} primary>Sign Up</Button>
		<Button {size}>Login</Button>
	</div>
</div>
