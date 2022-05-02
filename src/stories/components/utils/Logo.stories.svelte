<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Logo from './Logo.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Logo"
	component={Logo}
	argTypes={{
		color: {
			name: 'Color',
			control: 'color',
			defaultValue: '#000000'
		},
		height: {
			name: 'Height',
			control: { type: 'range', min: 0, max: 300, step: 10 },
			defaultValue: 100
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Logo {...args} --color={args.color} --height={args.height + 'px'} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
	name="White"
	args={{
		color: '#FFFFFF'
	}}
/>

<Story name="Black" />
