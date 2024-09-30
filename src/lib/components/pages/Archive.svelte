<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import ArchiveHeader from '$lib/components/ArchiveHeader.svelte';

	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import Pagination from '../Pagination.svelte';
	import { filteredMeta } from '$lib/utils';
	import { page } from '$app/stores';
	import CaseStudyCard from '../CaseStudyCard.svelte';
	import PublicationCard from '../PublicationCard.svelte';

	export let data;

	const meta = filteredMeta(
		$page.data.settings.data?.custom_type_meta,
		data.documents?.results[0].type
	);
</script>

<Bounded wide={true}>
	<ArchiveHeader>
		<Heading1>
			{#if data.page?.data?.title}
				{data.page.data.title}
			{:else}
				{meta[0]?.title && meta[0]?.title}
			{/if}
		</Heading1>
		{#if data.page?.data?.description}
			<PrismicRichText field={data.page.data.description} />
		{:else if meta[0]?.description}
			<p>{meta[0].description}</p>
		{/if}
	</ArchiveHeader>
	<Grid variant={`${data.documents?.results[0].type === 'post' ? '2-col' : '3-col'}`} class="py-24">
		{#each data.documents?.results as item}
			{#if item.type === 'case_study'}
				<CaseStudyCard {item} />
			{/if}

			{#if item.type === 'post'}
				<ArticleCard {item} />
			{/if}

			{#if item.type === 'publications'}
				<PublicationCard {item} />
			{/if}
		{/each}
	</Grid>

	<Pagination
		totalPages={data.documents?.total_pages}
		totalResults={data.documents?.total_results_size}
		pageNumber={data.documents?.page}
		resultsPerPage={data.documents?.results_per_page}
	/>
</Bounded>
