<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Textbox from './Textbox.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Textbox"
	component={Textbox}
	argTypes={{
		type: {
			control: { type: 'select' },
			options: ['text', 'password', 'tel', 'number', 'search'],
			defaultValue: 'text',
			name: 'Textbox Type'
		},
		error: {
			control: 'boolean',
			description: 'This is a variable that displays a state of error',
			defaultValue: false,
			name: 'Error'
		},
		label: {
			control: 'text',
			description: 'This is used to change the text inside the textbox',
			defaultValue: 'this is a textbox',
			name: 'Label Text'
		},
		errorMessage: {
			control: 'text',
			description: 'This is used to change the text inside the error message',
			defaultValue: 'Wrong Email',
			name: 'Error Message'
		},
		xpad: {
			control: { type: 'range', min: 0, max: 50, step: 2 },
			description: 'This is to change the textbox x padding',
			defaultValue: 20,
			name: 'X Padding'
		},
		ypad: {
			control: { type: 'range', min: 0, max: 30, step: 2 },
			description: 'This is to change the textbox y padding',
			defaultValue: 10,
			name: 'Y Padding'
		},
		disabled: {
			control: 'boolean',
			description: 'This is a variable that disabled the textbox',
			defaultValue: false,
			name: 'Disabled'
		},
		width: {
			control: { type: 'range', min: 0, max: 600, step: 20 },
			description: 'This is to change the textbox width',
			defaultValue: 200,
			name: 'Width'
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Textbox
		text={args.label}
		error={args.error}
		disabled={args.disabled}
		errorMessage={args.errorMessage}
		type={args.type}
		--x-pad={args.xpad.toString() + 'px'}
		--y-pad={args.ypad.toString() + 'px'}
		--width={args.width.toString() + 'px'}
	/>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Text" />

<Story
	name="Password"
	args={{
		type: 'password',
		label: 'this is a password box'
	}}
/>

<Story
	name="Number (only for mobile)"
	args={{
		type: 'tel',
		label: 'this is a number box'
	}}
/>

<Story
	name="Number"
	args={{
		type: 'number',
		label: 'this is a number box'
	}}
/>

<Story
	name="Search"
	args={{
		type: 'search',
		label: 'this is a Search box'
	}}
/>
