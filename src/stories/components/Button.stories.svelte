<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		primary: {
			control: 'boolean',
			description:
				'This defines if this will be used as a key button, in order to draw attention to',
			defaultValue: true,
			name: 'Primary',
			type: 'boolean'
		},
		darkMode: {
			control: 'boolean',
			description:
				'This defines if this will be used as on a dark mode display, or when toggled by user to dark mode',
			defaultValue: false,
			name: 'Dark Mode'
		},
		label: {
			control: 'text',
			description: 'This is used to change the text inside the button',
			defaultValue: 'Button',
			name: 'Text'
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			description: 'This is to change the button size, and shape',
			defaultValue: 'medium',
			name: 'Size'
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Button {...args} on:click={args.onClick}>
		{args.label}
	</Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />

<Story
	name="Secondary"
	args={{
		primary: false
	}}
/>

<Story
	name="Small"
	args={{
		size: 'small'
	}}
/>

<Story
	name="Large"
	args={{
		size: 'large'
	}}
/>

<Story
	name="Dark Mode"
	args={{
		darkMode: true
	}}
/>
