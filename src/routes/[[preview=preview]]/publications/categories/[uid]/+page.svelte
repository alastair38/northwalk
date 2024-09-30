<script lang="ts">
	import type { PageData } from './$types';
	import Archive from '$lib/components/pages/Archive.svelte';

	export let data: PageData;
</script>

<Archive {data} />

<!-- <Bounded>
	<ArchiveHeader>
		<Heading1>{data.page?.data?.title}</Heading1>
		{#if data.page.data.description}
			<PrismicRichText field={data.page?.data?.description} />
		{/if}
	</ArchiveHeader>
	<Grid class="py-12">
		{#each data.publications.results as item}
			<PublicationCard {item} />
		{/each}
	</Grid>
</Bounded> -->
