<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Blocks/Navigation Bar"
	component={Navbar}
	argTypes={{
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
	<Navbar {...args} />
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
