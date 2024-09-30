<script lang="ts">
	import Archive from '$lib/components/pages/Archive.svelte';

	export let data;
</script>

<Archive {data} />

<!-- <Bounded wide={true}>
	<ArchiveHeader>
		<Heading1>{meta[0]?.title && meta[0]?.title}</Heading1>
		{#if meta[0]?.description}
			<p>{meta[0]?.description}</p>
		{/if}
	</ArchiveHeader>
	<Grid variant="2-col" class="py-24">
		{#each data.posts?.results as item}
			<ArticleCard {item} />
		{/each}
	</Grid>

	<Pagination
		totalPages={data.posts.total_pages}
		totalResults={data.posts.total_results_size}
		pageNumber={data.posts.page}
		resultsPerPage={data.posts.results_per_page}
	/>
</Bounded> -->
