<script>
	// @ts-nocheck

	import '../css/app.css';
	import Button from '../components/buttons/Button.svelte';
	import Logo from '../components/utils/Logo.svelte';

	export let size = 'medium';
	export let height = '60px';
	export let logoColor = '#000000';
	export let button1style = 'box';
	export let button2style = 'box';
	export let button1color = 'primary';
	export let button2color = 'secondary';
</script>

<div class="flex flex-row bg-white px-8 py-4 justify-between rounded-xl">
	<div class="pl-4 my-auto">
		<Logo --color={logoColor} --height={height} />
	</div>
	<div class="my-auto">
		<Button {size} style={button1style} color={button1color}>Sign Up</Button>
		<Button {size} style={button2style} color={button2color}>Login</Button>
	</div>
</div>
