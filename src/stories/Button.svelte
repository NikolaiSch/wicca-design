<script>
	import './css/app.css';
	import CL from './svelte/ClassList';
	import { createEventDispatcher } from 'svelte';

	const cl = new CL();

	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;
	export let darkMode = false;

	if (darkMode) {
		cl.setTheme('dark');
	}

	if (primary === true) {
		cl.appendToBoth(['hover:scale-110', 'transition-all', 'bg-accent-ocean', 'text-primary-light']);
	} else if (primary === false) {
		cl.appendToBoth([
			'hover:scale-105',
			'transition-all',
			'border-accent-ocean',
			'border-2',
			'text-primary-light',
			'hover:bg-accent-ocean',
			'hover:bg-opacity-50'
		]);
	}
	/**
	 * How large should the button be?
	 */
	export let size = 'medium';

	if (size == 'small') {
		cl.appendToBoth(['px-3', 'py-2', 'rounded-xl']);
	} else if (size == 'medium') {
		cl.appendToBoth(['px-4', 'py-3', 'rounded-2xl']);
	} else if (size == 'large') {
		cl.appendToBoth(['px-6', 'py-3', 'rounded-3xl']);
	}
	/**
	 * Button contents
	 */
	export let label = '';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	// @ts-ignore
	function onClick(event) {
		dispatch('click', event);
	}
	let classes = cl.toString();
	$: classes = cl.toString();
</script>

<button type="button" class={classes} on:click={onClick}>
	{label}
</button>
