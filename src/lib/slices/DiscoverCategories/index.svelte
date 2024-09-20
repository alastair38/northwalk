<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import clsx from 'clsx';
	import type { CategoriesDocument } from '../../../prismicio-types';
	import Link from '$lib/components/Link.svelte';

	export let slice: Content.DiscoverCategoriesSlice;

	const categories = slice.primary.categories.map((category) => {
		return {
			data: category.category as typeof category.category & {
				data: Pick<CategoriesDocument['data'], 'title' | 'description' | 'image'>;
			},
			wide: category.wide as Boolean
		};
	});

	// const categories = slice.primary.categories.map((category) => {

	// 		category.category as typeof category.category & {
	// 			data: Pick<CategoriesDocument['data'], 'title' | 'description' | 'image'>;
	// 		};
	// });
</script>

<Bounded
	class="text-content"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Heading2 class="self-start font-black" variant="default">
		{slice.primary.heading}<span aria-hidden="true" class="text-accent ml-1">.</span>
	</Heading2>

	<div class="mt-16 grid w-full grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
		{#each categories as { data, wide }}
			<div
				class={clsx(
					'glass-container row-span-3 flex flex-col gap-4 rounded-lg p-4 ',
					wide ? 'md:col-span-2' : 'md:col-span-1',
					slice.variation === 'default'
						? 'bg-base/90 before:bg-base/80 text-content shadow-2xl'
						: 'bg-content-100/90 text-base-100 before:bg-content-100/80 '
				)}
			>
				<h3 class="text-2xl font-bold">{data.data.title}</h3>
				{#if data.data.description}
					<PrismicRichText field={data.data.description} />
				{/if}

				<Link field={data} class="" linkType="withArrow">Discover {data.data.title}</Link>
				<PrismicImage
					field={data.data.image}
					sizes="(max-width: 768px) 100vw, 50vw"
					class="mt-auto h-44 rounded-xl object-cover transition-transform duration-300 group-hover:scale-100"
				/>
			</div>
		{/each}
	</div>
</Bounded>
