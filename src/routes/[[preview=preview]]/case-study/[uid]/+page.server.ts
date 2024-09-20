import { createClient } from '$lib/prismicio';
import { asText } from '@prismicio/client';

import * as prismic from '@prismicio/client';
import type {
	AllDocumentTypes,
	CaseStudyDocumentDataAuthorsItem,
	PeopleDocument,
	PeopleDocumentDataPlatformItem
} from '../../../../prismicio-types.js';
export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('case_study', params.uid, {
		fetchLinks: ['people.name', 'people.image']
	});

	// const author = page.data.author as typeof page.data.author & {
	// 	data: Pick<PeopleDocument['data'], 'name'>;
	// };

	const authors = page.data.authors as typeof page.data.authors & {
		data: Pick<PeopleDocument['data'], 'name' | 'image'>;
	};

	return {
		page,

		authors,
		title: asText(page.data.company) + ' case study',
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('case_study');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
function asFilled(name: any) {
	throw new Error('Function not implemented.');
}
