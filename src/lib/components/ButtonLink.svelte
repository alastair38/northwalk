<script>
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<PrismicLink
	field={$$restProps.field}
	document={$$restProps.document}
	{...$$restProps}
	on:click
	class={clsx(
		'after:bg-accent border-accent-dark text-accent-dark hover:border-accent-dark/60 ring-accent-dark hover:text-accent-dark/60  bg-base relative inline-flex h-fit w-fit rounded-full border px-4 py-2 outline-none transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 after:hover:bg-opacity-15 focus:ring-2',
		className
	)}
>
	<slot />
</PrismicLink>
