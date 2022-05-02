<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Checkbox from './Checkbox.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Checkbox"
	component={Checkbox}
	argTypes={{
		disabled: {
			control: 'boolean',
			description: 'This is a variable that disabled the checkbox',
			defaultValue: false,
			name: 'Disabled'
		},
		color: {
			control: { type: 'color' },
			description: 'This shows the Selected color when it is checked',
			defaultValue: '#57849e',
			name: 'Color'
		},
		label: {
			control: 'text',
			description: 'This is used to change the text inside the Label',
			defaultValue: 'Text',
			name: 'Label Text'
		},
		size: {
			control: { type: 'range', min: 1, max: 50, step: 1 },
			description: 'This is to change the checkbox size in pixels',
			defaultValue: 20,
			name: 'Size'
		},
		debug: {
			control: 'boolean',
			defaultValue: false,
			name: 'Debug Mode'
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Checkbox
		--color={args.color}
		--size={args.size + 'px'}
		debug={args.debug}
		disabled={args.disabled}
	>
		{args.label}
	</Checkbox>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Checkbox" id="checkb" />
