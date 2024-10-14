<script lang="ts">
	type Variant = 'none' | 'dark' | 'brand' | 'accent';
	import clsx from 'clsx';
	export let variant: Variant = 'none';
</script>

{#if variant !== 'none'}
	<div class="absolute left-0 right-0 top-0 -z-10 h-full w-full overflow-hidden">
		<svg
			class=" h-auto w-full overflow-hidden"
			viewBox="0 0 1920 1081"
			width="1920px"
			height="1081px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color="hsl(var(--color-content-dark) / 1)" />

					<stop offset="100%" stop-color="hsl(var(--color-content) / 1)" />
				</linearGradient>
				<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color="hsl(var(--color-content) / 1)" />

					<stop offset="100%" stop-color="hsl(var(--color-content-dark) / 1)" />
				</linearGradient>
			</defs>
			<path
				d="M0 163L1920 379L1920 0L0 0Z"
				fill={clsx(
					variant === 'dark' && 'url(#Gradient2)',
					variant === 'accent' && 'hsl(var(--color-accent-light) / 1)',
					variant === 'brand' && 'hsl(var(--color-brand-light) / 1)'
				)}
				transform="matrix(1, 0, 0, 1, 0, 1.4210854715202004e-14)"
			/>
			<path
				d="M0 897L1920 660L1920 377L0 161Z"
				fill={clsx(
					variant === 'dark' && 'url(#Gradient1)',
					variant === 'accent' && 'hsl(var(--color-accent) / 1)',
					variant === 'brand' && 'hsl(var(--color-brand) / 1)'
				)}
				transform="matrix(1, 0, 0, 1, 0, 1.4210854715202004e-14)"
			/>
		</svg>
	</div>
{/if}

<!-- <svg
	class="absolute left-0 right-0 top-0 -z-10 h-auto w-full overflow-hidden opacity-85"
	viewBox="0 0 1920 1081"
	width="1920px"
	height="1081px"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0 44L1920 44L1920 0L0 0Z"
		fill="hsl(var(--color-content) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 87L1920 55L1920 42L0 42Z"
		fill="hsl(var(--color-content) / .75)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 87L1920 120L1920 53L0 85Z"
		fill="hsl(var(--color-content-dark) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 174L1920 217L1920 118L0 85Z"
		fill="#00b388"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 519L1920 368L1920 215L0 172Z"
		fill="#00ab85"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 638L1920 487L1920 366L0 517Z"
		fill="hsl(var(--color-content-dark) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 660L1920 530L1920 485L0 636Z"
		fill="hsl(var(--color-content-dark) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 876L1920 703L1920 528L0 658Z"
		fill="hsl(var(--color-content-light) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 995L1920 908L1920 701L0 874Z"
		fill="hsl(var(--color-content) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
	<path
		d="M0 1081L1920 1081L1920 906L0 993Z"
		fill="hsl(var(--color-content-dark) / 1)"
		transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)"
	/>
</svg> -->
