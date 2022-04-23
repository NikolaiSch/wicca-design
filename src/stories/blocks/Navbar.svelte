<script>
	import '../css/app.css';
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';

	export let size = 'medium';
	export let button1style = 'normal';
	export let button2style = 'ghost';
	export let button1color = 'primary';
	export let button2color = 'secondary';
</script>

<div class="flex flex-row bg-white px-4 py-2 justify-between">
	<div class="pl-4">
		<Logo />
	</div>
	<div class="my-auto">
		<Button {size} style={button1style} color={button1color}>Sign Up</Button>
		<Button {size} style={button2style} color={button2color}>Login</Button>
	</div>
</div>
