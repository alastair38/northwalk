<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';

	import PersonHeader from '$lib/components/PersonHeader.svelte';
	import type { Content } from '@prismicio/client';

	import MaskImage from '$lib/components/MaskImage.svelte';
	import RelatedContent from '$lib/components/RelatedContent.svelte';
	import RelatedPublications from '$lib/components/RelatedPublications.svelte';

	export let data;

	const pubs = data.relatedPublications.results.map(
		(study) =>
			study as typeof study & {
				data: Content.PublicationsDocument['data'];
			}
	);

	const articles = data.relatedPosts.results.map(
		(study) =>
			study as typeof study & {
				data: Content.PostDocument['data'];
			}
	);
</script>

<MaskImage image={data.page.data.image} />
<Bounded tag="article">
	<PersonHeader data={data.page} />

	{#if articles.length !== 0}
		<RelatedContent heading={'Recent articles'} {articles} />
	{/if}
	{#if pubs.length !== 0}
		<RelatedContent heading={'Publications'} articles={pubs} />
	{/if}
</Bounded>
