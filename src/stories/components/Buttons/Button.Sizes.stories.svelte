<script>
	import { Story } from '@storybook/addon-svelte-csf';
	import ButtonMeta from './Button.Meta.svelte';
</script>

<ButtonMeta title="Sizes" />

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
