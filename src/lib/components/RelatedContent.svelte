<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import IconArrowRight from '~icons/ph/arrow-right';
	import type { Content, Query } from '@prismicio/client';

	export let articles: (Content.AllDocumentTypes & {
		data: Content.PostDocumentData | Content.PublicationsDocumentData;
	})[];
	export let heading: string | undefined = 'Articles';
	//export let publications: (Content.AllDocumentTypes & { data: Simplify<CaseStudyDocumentData> })[];
</script>

<div class="mt-16 w-full space-y-12">
	<h2 class="flex gap-1 text-xl font-bold md:text-3xl">
		{heading} <span aria-hidden="true" class="text-accent-light">.</span>
	</h2>
	<div class="grid grid-flow-row gap-12">
		{#each articles as item}
			<div class="space-y-6">
				{#if item.type === 'post'}
					<PrismicImage field={item.data.image} class="h-60 w-full object-cover opacity-100" />
				{/if}

				<h3 class="flex font-black">
					{item.data.title}
				</h3>

				{#if item.type === 'post'}
					<PrismicRichText field={item.data.excerpt} />
				{/if}

				{#if item.type === 'publications'}
					<PrismicRichText field={item.data.body} />
				{/if}

				<PrismicLink
					document={item}
					class="text-accent-light group flex w-fit items-center gap-2 font-black"
					>Read more <span class="sr-only">about {item.data.title}</span>
					<IconArrowRight class="transition-transform duration-200 group-hover:translate-x-1" />
				</PrismicLink>
			</div>
			<hr />
		{/each}
	</div>
</div>
