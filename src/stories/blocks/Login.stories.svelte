<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { action } from '@storybook/addon-actions';
	import Login from './Login.svelte';
	export const actionsData = {
		onLogin: action('onLogin')
	};
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Blocks/Login"
	component={Login}
	argTypes={{
		onLogin: { action: 'onLogin' }
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Login />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Login" />
