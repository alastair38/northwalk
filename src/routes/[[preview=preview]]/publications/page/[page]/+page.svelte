<script lang="ts">
	import type { PageData } from './$types';
	import Archive from '$lib/components/pages/Archive.svelte';

	export let data: PageData;
</script>

<Archive {data} />

<!-- <Bounded wide={true}>
	<ArchiveHeader>
		<Heading1>{meta[0]?.title && meta[0]?.title}</Heading1>

		{#if meta[0]?.description}
			<p>{meta[0]?.description}</p>
		{/if}
	</ArchiveHeader>
	<Grid class="py-24">
		{#each data.publications?.results as item}
			<PublicationCard {item} />
		{/each}
	</Grid>

	<Pagination
		totalPages={data.publications.total_pages}
		totalResults={data.publications.total_results_size}
		pageNumber={data.publications.page}
		resultsPerPage={data.publications.results_per_page}
	/>
</Bounded> -->
