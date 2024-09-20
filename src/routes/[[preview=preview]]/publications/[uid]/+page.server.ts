import { createClient } from '$lib/prismicio';
import { asText } from '@prismicio/client';

import * as prismic from '@prismicio/client';
import type {
	AllDocumentTypes,
	CaseStudyDocumentDataAuthorsItem,
	CategoriesDocument,
	PeopleDocument,
	PeopleDocumentDataPlatformItem
} from '../../../../prismicio-types.js';
export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('publications', params.uid, {
		fetchLinks: ['people.name', 'people.image', 'categories.title']
	});

	const authors = page.data.authors as typeof page.data.authors & {
		data: Pick<PeopleDocument['data'], 'name' | 'image'>;
	};

	const categories = page.data.categories as typeof page.data.categories & {
		data: Pick<CategoriesDocument['data'], 'title'>;
	};
	return {
		page,
		authors,
		categories,
		title: page.data.title,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.image
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('publications');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
function asFilled(name: any) {
	throw new Error('Function not implemented.');
}
