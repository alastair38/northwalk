import { createClient } from '$lib/prismicio';
import { redirect } from '@sveltejs/kit';

// export async function load({ fetch, cookies }) {
// 	const client = createClient({ fetch, cookies });

// 	const studies = await client.getAllByType('case_study');

// 	return {
// 		studies,
// 		title: 'Case studies',
// 		meta_description: 'A list of case studies',
// 		meta_title: 'Case studies'
// 	};
// }

export function load() {
	redirect(301, '/case-study/page/1');
}

export function entries() {
	return [{}];
}
