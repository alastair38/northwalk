<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { asText } from '@prismicio/client';
	import type { PageData } from './$types';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data: PageData;
</script>

<Bounded>
	<h1 class="mb-12 text-4xl font-black">Case Studies</h1>
	<div class="grid grid-cols-3 gap-8">
		{#each data.studies.results as item}
			<div class="group overflow-clip rounded-md shadow-xl" style:--company="image-{item.uid}">
				<PrismicLink
					document={item}
					class="grid font-black text-base-100 ring group-hover:text-base-200"
				>
					<PrismicImage field={item.data.image} class="h-60 w-full object-cover opacity-100" />
					<span class="bg-content-100 px-6 py-3"> <PrismicText field={item.data.company} /></span>
				</PrismicLink>
			</div>
		{/each}
	</div>
	<div class="mt-12 flex items-center gap-4">
		{#if data.studies.total_pages > 1}
			{#each Array(data.studies.total_pages) as _, idx}
				<a
					href="/case-study/page/{idx + 1}"
					class={data.studies.page === idx + 1
						? 'bg-accent flex h-8 w-8 items-center justify-center rounded-full'
						: 'flex h-8 w-8 items-center justify-center rounded-full'}
				>
					{idx + 1}
				</a>
			{/each}
			<span
				class="border-content/10 text-content fixed bottom-4 right-5 rounded-full border px-3 py-1 text-xs shadow-sm"
				>{`Showing ${data.studies.results_per_page * (data.studies.page - 1) + 1} to ${
					data.studies.page === data.studies.total_pages
						? data.studies.total_results_size
						: data.studies.results_per_page * data.studies.page
				} of ${data.studies.total_results_size} results`}
			</span>{/if}
	</div>
</Bounded>
