<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';
	import type {
		PeopleDocument,
		CategoriesDocument,
		ArticleCategoriesDocument
	} from '../../../../prismicio-types.js';
	import Categories from '$lib/components/Categories.svelte';
	import Authors from '$lib/components/Authors.svelte';
	import FeaturedImage from '$lib/components/FeaturedImage.svelte';
	import MaskImage from '$lib/components/MaskImage.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import DateTime from '$lib/components/DateTime.svelte';
	import Excerpt from '$lib/components/Excerpt.svelte';

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
				uid: ArticleCategoriesDocument['uid'];
				data: Pick<ArticleCategoriesDocument['data'], 'title'>;
			}
	);
</script>

<MaskImage image={data.page.data.image} class="mask opacity-10 mix-blend-multiply" />
<Bounded tag="article">
	<ArticleHeader>
		<DateTime dateTime={data.page.first_publication_date} />
		<Heading1>{data.page.data.title}</Heading1>
		{#if authors.length > 0}
			<Authors class="justify-center" {authors} />
		{/if}

		{#if data.page.data.excerpt}
			<Excerpt excerpt={data.page.data.excerpt} />
		{/if}

		{#if categories.length > 0}
			<Categories class="justify-center" {categories} />
		{/if}
	</ArticleHeader>
	<FeaturedImage image={data.page.data.image} />
	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
