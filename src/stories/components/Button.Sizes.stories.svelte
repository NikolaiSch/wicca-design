<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Button/Sizes"
	component={Button}
	argTypes={{
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary', 'danger'],
			description:
				'This defines if this will be used as a key button, in order to draw attention to, or another color way',
			defaultValue: 'primary',
			name: 'Colorway'
		},
		style: {
			control: { type: 'select' },
			options: ['normal', 'ghost', 'extra-rounded'],
			description: 'This defines how the button will look in shape',
			defaultValue: 'normal',
			name: 'Style'
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

<Story
	name="Small"
	args={{
		size: 'small'
	}}
/>

<Story
	name="Medium"
	args={{
		size: 'medium'
	}}
/>

<Story
	name="Large"
	args={{
		size: 'large'
	}}
/>
