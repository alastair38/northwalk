<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'wide';
	let className: string | undefined = undefined;

	export let tag = 'section';
	export { className as class };
	export let variant = 'default';
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={clsx('px-4 py-14 first:pt-10 md:px-8 md:py-20 lg:py-24', className)}
>
	<div
		class={clsx(
			'mx-auto flex w-full flex-col items-center',
			variant === 'default' ? 'max-w-5xl' : 'max-w-7xl'
		)}
	>
		<slot />
	</div>
</svelte:element>
