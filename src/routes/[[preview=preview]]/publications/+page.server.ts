import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const publications = await client.getAllByType('publications');

	return {
		publications,
		title: 'Publications',
		meta_description: 'A list of publications',
		meta_title: 'Publications'
	};
}

export function entries() {
	return [{}];
}
