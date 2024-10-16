<script lang="ts">
	import { PrismicText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/layout/Bounded.svelte';

	import type { PeopleDocument } from '../../../../prismicio-types.js';
	import Authors from '$lib/components/relatedContent/Authors.svelte';
	import Excerpt from '$lib/components/utilities/Excerpt.svelte';
	import ArticleHeader from '$lib/components/headers/ArticleHeader.svelte';
	import FeaturedImage from '$lib/components/utilities/FeaturedImage.svelte';
	import Heading1 from '$lib/components/utilities/Heading1.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let data;

	const authors = data.page.data.authors.map(
		(author) =>
			author.author as typeof author.author & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image'>;
			}
	);
</script>

<Bounded>
	<ArticleHeader>
		<Dotted variant="faded" class="text-content/50" />
		<Heading1>
			<PrismicText field={data.page.data.company} />
			<span class="mt-2 block text-lg font-normal text-accent-light">Case Study</span>
		</Heading1>
		{#if authors.length > 0}
			<Authors class="justify-center" {authors} />
		{/if}

		{#if data.page.data.description}
			<Excerpt class="mx-auto max-w-prose" excerpt={data.page.data.description} />
		{/if}
	</ArticleHeader>
	<FeaturedImage image={data.page.data.image} />
	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
