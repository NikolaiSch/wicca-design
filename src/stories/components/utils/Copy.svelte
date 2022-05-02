<script>
	import '../../css/app.css';
	export let text = '';
	let copied = false;
</script>

<code class="inline-flex flex-row bg-gray-400 py-2 px-2">
	<h2 class="text-xl mr-12 text-white px-2 pt-[0.1em]">{text}</h2>
	<button
		type="button"
		class="bg-accent-ocean w-8 h-8 transition-all scale-100 hover:scale-[1.45] active:scale-125"
		on:click={async () => {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => (copied = false), 1000);
		}}
	>
		{#if copied == false}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				viewBox="0 0 512 512"
				enable-background="new 0 0 512 512"
				class="fill-white m-[0.3em]"
			>
				<g>
					<g>
						<g>
							<path
								d="M480.7,11H130.4c-11.3,0-20.4,9.1-20.4,20.4v60.3H31.5c-11.3,0-20.4,9.1-20.4,20.4v368.5c0,11.3,9.1,20.4,20.4,20.4     h350.3c11.3,0,20.4-9.1,20.4-20.4v-60.3h78.5c11.3,0,20.4-9.1,20.4-20.4V31.4C501.1,20.1,491.9,11,480.7,11z M361.3,460.2H51.9     V132.5h309.4V460.2z M460.2,379.5h-58.1V112.1c0-11.3-9.1-20.4-20.4-20.4h-231V51.8h309.4V379.5z"
							/>
							<path
								d="m127.8,242.6h157.7c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-157.7c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4z"
							/>
							<path
								d="m127.8,390.9h157.7c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-157.7c-11.3,0-20.4,9.1-20.4,20.4 0,11.2 9.1,20.4 20.4,20.4z"
							/>
						</g>
					</g>
				</g>
			</svg>
		{:else}
			<span class="text-3xl text-white">✓</span>
		{/if}
	</button>
</code>
