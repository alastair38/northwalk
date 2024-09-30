<script lang="ts">
	import clsx from 'clsx';

	type Variant = '1-col' | '2-col' | '3-col' | '6-col';

	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = '3-col';
</script>

<div
	class={clsx(
		'mx-auto grid w-full gap-4 md:gap-8',
		variant === '1-col' && 'grid-cols-1',
		variant === '2-col' && 'grid-cols-1 md:grid-cols-2',
		variant === '3-col' && 'grid-cols-1 md:grid-cols-3',
		variant === '6-col' && 'grid-cols-1 md:grid-cols-4 lg:grid-cols-6',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
