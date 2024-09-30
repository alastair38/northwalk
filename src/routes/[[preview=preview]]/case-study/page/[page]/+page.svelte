<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { asText } from '@prismicio/client';
	import type { PageData } from './$types';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { filteredMeta } from '$lib/utils';
	import { page } from '$app/stores';
	import ArchiveHeader from '$lib/components/ArchiveHeader.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import Archive from '$lib/components/pages/Archive.svelte';

	export let data: PageData;

	console.log(data);

	// const meta = filteredMeta(
	// 	$page.data.settings.data?.custom_type_meta,
	// 	data.documents.results[0].type
	// );
</script>

<Archive {data} />
<!-- <Bounded wide={true}>
	<ArchiveHeader>
		<Heading1>{meta[0]?.title && meta[0]?.title}</Heading1>
		{#if meta[0]?.description}
			<p>{meta[0]?.description}</p>
		{/if}
	</ArchiveHeader>
	<Grid variant="3-col" class="py-12">
		{#each data.documents.results as item}
			<CaseStudyCard {item} />
		{/each}
	</Grid>

	<Pagination
		totalPages={data.documents.total_pages}
		totalResults={data.documents.total_results_size}
		pageNumber={data.documents.page}
		resultsPerPage={data.documents.results_per_page}
	/>
</Bounded> -->
