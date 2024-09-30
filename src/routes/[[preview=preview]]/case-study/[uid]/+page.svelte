<script lang="ts">
	import { PrismicText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';

	import TriangleGrid from '$lib/components/TriangleGrid.svelte';

	import type { PeopleDocument } from '../../../../prismicio-types.js';
	import Authors from '$lib/components/Authors.svelte';
	import Excerpt from '$lib/components/Excerpt.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import FeaturedImage from '$lib/components/FeaturedImage.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';

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
		<TriangleGrid />
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
