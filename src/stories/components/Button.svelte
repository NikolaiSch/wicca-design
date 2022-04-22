<script>
	import '../css/app.css';
	import CL from '../svelte/ClassList';
	import { createEventDispatcher } from 'svelte';

	const cl = new CL();

	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;
	export let darkMode = false;
	export let size = 'medium';

	if (darkMode) {
		cl.setTheme('dark');
	}

	cl.appendToBoth([
		'hover:text-gray-700',
		'hover:delay-75',
		'hover:text-white',
		'hover:-translate-y-1',
		'hover:translate-z-1',
		'hover:bg-opacity-80',
		'hover:shadow-lg',
		`hover:shadow-accent-ocean/40`,
		'active:translate-y-1',
		'active:shadow-none',
		'delay-150',
		'transition-all',
		'font-bold',
		'mx-1'
	]);

	if (primary === true) {
		cl.appendToBoth([`bg-accent-ocean`, 'text-primary-light', 'hover:scale-110']);
	} else if (primary === false) {
		cl.appendToBoth([
			`border-accent-ocean`,
			'border-2',
			'bg-opacity-30',
			`bg-accent-ocean`,
			'text-primary-dark',
			'hover:scale-105'
		]);
	}

	if (size == 'small') {
		cl.appendToBoth(['px-3', 'py-2', 'rounded-3xl', 'text-md']);
	} else if (size == 'medium') {
		cl.appendToBoth(['px-4', 'py-3', 'rounded-3xl', 'text-lg']);
	} else if (size == 'large') {
		cl.appendToBoth(['px-6', 'py-3', 'rounded-3xl', 'text-xl']);
	}

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
	<slot />
</button>
