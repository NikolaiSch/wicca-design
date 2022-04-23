<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Blocks/NavigationBar"
	component={Navbar}
	argTypes={{
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			description: 'This is to change the button size, and shape',
			defaultValue: 'medium',
			name: 'Size'
		},
		color1: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary', 'danger'],
			description:
				'This defines if this will be used as a key button, in order to draw attention to, or another color way',
			defaultValue: 'primary',
			name: 'Colorway For Signup'
		},
		style1: {
			control: { type: 'select' },
			options: ['normal', 'ghost', 'extra-rounded'],
			description: 'This defines how the button will look in shape',
			defaultValue: 'normal',
			name: 'Style for Signup'
		},
		color2: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary', 'danger'],
			description:
				'This defines if this will be used as a key button, in order to draw attention to, or another color way',
			defaultValue: 'primary',
			name: 'Colorway For Login'
		},
		style2: {
			control: { type: 'select' },
			options: ['normal', 'ghost', 'extra-rounded'],
			description: 'This defines how the button will look in shape',
			defaultValue: 'normal',
			name: 'Style For Login'
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Navbar
		{...args}
		button1color={args.color1}
		button2color={args.color2}
		button1style={args.style1}
		button2style={args.style2}
	/>
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
