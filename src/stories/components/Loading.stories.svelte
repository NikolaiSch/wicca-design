<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Loading from './Loading.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Loading"
	component={Loading}
	argTypes={{
		color: {
			name: 'Color',
			control: { type: 'color' },
			defaultValue: '#000000'
		},
		width: {
			name: 'Width',
			control: { type: 'range', min: 0, max: 100, step: 5 },
			defaultValue: 50
		},
		length: {
			name: 'Length of animation (seconds)',
			control: { type: 'range', min: 0, max: 20, step: 1 },
			defaultValue: 2
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Loading {...args} --color={args.color} --width={args.width} --length={args.length + 's'} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Loading" id="loading" />
