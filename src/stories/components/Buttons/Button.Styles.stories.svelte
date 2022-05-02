<script>
	import { Story } from '@storybook/addon-svelte-csf';
	import ButtonMeta from './Button.Meta.svelte';
</script>

<ButtonMeta title="Styles" />

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Box" args={{ style: 'box' }} />

<Story
	name="Ghost"
	args={{
		style: 'ghost'
	}}
/>

<Story name="Rounded" args={{ style: 'rounded' }} />

<Story
	name="Rounded Ghost"
	args={{
		style: 'rounded-ghost'
	}}
/>

<Story
	name="Extra Round"
	args={{
		style: 'extra-rounded'
	}}
/>
