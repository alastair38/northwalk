<script lang="ts">
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';
	import IconTag from '~icons/ph/tag-light';
	let className: string | undefined = undefined;

	export { className as class };
	export let categories;
</script>

<div class={clsx('my-6 flex gap-6 text-sm', className)}>
	{#each categories as item}
		<PrismicLink
			class="text-content/70 hover:text-content/50  border-content/70 hover:border-content/50 focus-visible:border-content/50 outline-content/80 group flex items-center gap-2 rounded-full border px-3 py-1 no-underline focus-visible:outline-offset-4"
			field={item}
			><IconTag aria-hidden="true" />
			{item.data.title}
		</PrismicLink>
	{/each}
</div>
