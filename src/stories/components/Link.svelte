<script>
	import '../css/app.css';
	/**
	 * @type {string}
	 */
	export let href;
</script>

<div
	class="inline-block transition-all duration-300 text-blue-400 hover:scale-105 hover:-translate-y-1 hover:border-b hover:border-blue-400 t"
>
	<a {href} alt="link" class=""><slot /></a>
</div>
