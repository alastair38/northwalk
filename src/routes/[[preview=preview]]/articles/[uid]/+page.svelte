<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText, SliceZone } from '@prismicio/svelte';
	import IconTag from '~icons/ph/tag-light';
	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';
	import type { PeopleDocument, CategoriesDocument } from '../../../../prismicio-types.js';
	import Categories from '$lib/components/Categories.svelte';
	import Authors from '$lib/components/Authors.svelte';
	import FeaturedImage from '$lib/components/FeaturedImage.svelte';
	import MaskImage from '$lib/components/MaskImage.svelte';
	import { asDate } from '@prismicio/client';
	import Heading1 from '$lib/components/Heading1.svelte';

	export let data;

	const authors = data.page.data.authors.map(
		(author) =>
			author.author as typeof author.author & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image'>;
			}
	);

	const categories = data.page.data.categories.map(
		(category) =>
			category.category as typeof category.category & {
				uid: CategoriesDocument['uid'];
				data: Pick<CategoriesDocument['data'], 'title'>;
			}
	);
</script>

<MaskImage image={data.page.data.image} />
<Bounded>
	<header class="mx-auto max-w-3xl text-pretty text-center">
		<time
			datetime={data.page.first_publication_date}
			class="text-content/80 mb-4 inline-flex gap-1"
		>
			{asDate(data.page.first_publication_date)?.toLocaleDateString('en-GB', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})}
		</time>
		<Heading1>{data.page.data.title}</Heading1>

		{#if authors.length > 0}
			<Authors class="justify-center" {authors} />
		{/if}

		<div class="prose-lg">
			<PrismicRichText field={data.page.data.excerpt} />
		</div>

		{#if categories.length > 0}
			<Categories class="justify-center" {categories} />
		{/if}
	</header>

	<FeaturedImage image={data.page.data.image} />

	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
