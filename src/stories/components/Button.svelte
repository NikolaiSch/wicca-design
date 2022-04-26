<script>
	import '../css/app.css';
	import CL from '../svelte/ClassList';
	import { createEventDispatcher } from 'svelte';

	const cl = new CL();

	export let color = 'primary';
	export let size = 'medium';
	export let style = 'normal';

	cl.appendToBoth([
		'hover:delay-75',
		'hover:-translate-y-1',
		'hover:translate-z-1',
		'active:translate-y-1',
		'active:shadow-none',
		'delay-150',
		'transition-all',
		'font-bold',
		'mx-1'
	]);

	if (style === 'normal') {
		cl.appendToBoth(['hover:scale-110']);
		if (size == 'small') {
			cl.appendToBoth(['px-3', 'py-2', 'rounded-3xl', 'text-md']);
		} else if (size == 'medium') {
			cl.appendToBoth(['px-4', 'py-3', 'rounded-3xl', 'text-lg']);
		} else if (size == 'large') {
			cl.appendToBoth(['px-6', 'py-3', 'rounded-3xl', 'text-xl']);
		}
	} else if (style === 'ghost') {
		cl.appendToBoth([
			'border-2',
			'bg-opacity-30',
			'hover:scale-105',
			'hover:bg-opacity-80',
			'text-gray-800'
		]);
		if (size == 'small') {
			cl.appendToBoth(['px-3', 'py-2', 'rounded-3xl', 'text-md']);
		} else if (size == 'medium') {
			cl.appendToBoth(['px-4', 'py-3', 'rounded-3xl', 'text-lg']);
		} else if (size == 'large') {
			cl.appendToBoth(['px-6', 'py-3', 'rounded-3xl', 'text-xl']);
		}
	} else if (style === 'extra-rounded') {
		cl.appendToBoth(['text-primary-light', 'hover:scale-110']);
		if (size == 'small') {
			cl.appendToBoth(['px-3', 'py-2', 'rounded-full', 'text-md']);
		} else if (size == 'medium') {
			cl.appendToBoth(['px-4', 'py-3', 'rounded-full', 'text-lg']);
		} else if (size == 'large') {
			cl.appendToBoth(['px-6', 'py-3', 'rounded-full', 'text-xl']);
		}
	} else if (style === 'box') {
		cl.appendToBoth(['text-primary-light', 'hover:scale-110']);
		if (size == 'small') {
			cl.appendToBoth(['px-3', 'py-1', 'rounded-sm', 'text-md']);
		} else if (size == 'medium') {
			cl.appendToBoth(['px-4', 'py-1', 'rounded-sm', 'text-lg']);
		} else if (size == 'large') {
			cl.appendToBoth(['px-6', 'py-1', 'rounded-sm', 'text-xl']);
		}
	}

	if (color === 'primary') {
		cl.appendToBoth([
			`bg-accent-ocean`,
			`hover:shadow-accent-ocean/40`,
			'hover:shadow-lg',
			'hover:text-white',
			'text-white',
			'border-accent-ocean'
		]);
	} else if (color === 'secondary') {
		cl.appendToBoth([
			'text-white',
			`bg-accent-glass`,
			`hover:shadow-accent-glass/40`,
			'hover:shadow-lg',
			'border-accent-sea'
		]);
	} else if (color === 'tertiary') {
		cl.appendToBoth([
			'text-white',
			`bg-primary-dark`,
			`hover:shadow-accent-dark/40`,
			'hover:shadow-lg',
			'border-gray-700'
		]);
	} else if (color === 'danger') {
		cl.appendToBoth([
			'text-white',
			`bg-red-600`,
			`hover:shadow-red-600/40`,
			'hover:shadow-lg',
			'border-red-700'
		]);
	}

	const dispatch = createEventDispatcher();

	/**
	 * @param {any} event
	 */
	function onClick(event) {
		dispatch('click', event);
	}

	let classes = cl.toString();
	$: classes = cl.toString();
</script>

<button type="button" class={classes} on:click={onClick}>
	<slot />
</button>
