import { createClient } from '$lib/prismicio';
import * as prismic from '@prismicio/client';
import { asText } from '@prismicio/client';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('categories', params.uid);

	const publications = await client.getByType('publications', {
		filters: [prismic.filter.at('my.publications.categories.category', page.id)]
	});

	return {
		page,
		title: page.data.title,
		publications,
		meta_description: asText(page.data.description),
		meta_title: page.data.title,
		meta_image: page.data.image
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('categories');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
function asFilled(name: any) {
	throw new Error('Function not implemented.');
}
