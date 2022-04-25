<script>
</script>

<svg>
	<circle cx="50%" cy="50%" fill="inherit" class="fill-transparent stroke-[10]" />
</svg>

<style>
	:root {
		--color: blue;
		--width: 50;
		--size: calc(var(--width) * 4 + 1);
		--length: 4s;
	}
	@keyframes ping {
		from {
			r: 50;
			fill-opacity: 20%;
		}
		30% {
		}
		85% {
			fill-opacity: 0;
			r: 0;
			stroke-opacity: 0%;
		}
		95% {
		}
		97.5% {
			fill-opacity: 20%;
			r: 55;
		}
		99% {
			r: 51;
		}
		to {
			r: 50;
		}
	}
	circle {
		border-radius: var(--width);
		animation: ping var(--length) ease-in 0ms infinite both;
		stroke: var(--color);
		fill: var(--color);
		fill-opacity: 20%;
	}
	svg {
		width: var(--size);
		height: var(--size);
	}
</style>
