<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import clsx from 'clsx';
	import EmphasisedText from './EmphasisedText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicText, PrismicImage } from '@prismicio/svelte';
	import Heading2RichText from '$lib/components/Heading2RichText.svelte';

	export let slice: Content.BentoSlice;
</script>

<Bounded
	class="text-content"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<PrismicRichText
		field={slice.primary.heading}
		components={{ em: EmphasisedText, heading2: Heading2RichText }}
	/>

	<div class="text-content/80 mx-auto mt-6 max-w-prose text-balance text-center text-lg">
		<PrismicRichText field={slice.primary.body} />
	</div>

	<div class="mt-16 grid max-w-5xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
		{#each slice.primary.cards as item}
			<div
				class={clsx(
					'glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg p-4 ',
					item.wide ? 'md:col-span-2' : 'md:col-span-1',
					slice.variation === 'default'
						? 'bg-base/90 before:bg-base/80 text-content shadow-2xl'
						: 'bg-content-100/90 text-base-100 before:bg-content-100/80 '
				)}
			>
				<h3 class="text-2xl font-bold"><PrismicText field={item.title} /></h3>
				<div class="max-w-md text-balance">
					<PrismicRichText field={item.body} />
				</div>
				<PrismicImage field={item.image} class="max-h-36 w-full object-cover" />
			</div>
		{/each}
	</div>
</Bounded>
