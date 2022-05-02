<script>
	import { Story } from '@storybook/addon-svelte-csf';
	import ButtonMeta from './Button.Meta.svelte';
</script>

<ButtonMeta title="Colors" />

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Primary" />

<Story
	name="Secondary"
	args={{
		color: 'secondary'
	}}
/>

<Story
	name="Tertiary"
	args={{
		color: 'tertiary'
	}}
/>

<Story
	name="Danger"
	args={{
		color: 'danger'
	}}
/>
