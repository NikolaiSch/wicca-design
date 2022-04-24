<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Components/Link"
	component={Link}
	argTypes={{
		href: {
			name: 'Link to',
			control: 'text',
			defaultValue: 'https://google.com'
		},
		text: {
			name: 'Text',
			control: 'text',
			defaultValue: 'This is a link to google'
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Link href={args.href}>{args.text}</Link>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Link" />
