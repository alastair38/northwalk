import { createClient } from '$lib/prismicio';

let total = null;
export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const studies = await client.getByType('case_study', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc'
		},
		pageSize: 9,
		page: Number(params.page)
	});
	total = studies.total_pages;
	return {
		studies,
		title: 'Case studies',
		meta_description: 'A list of case studies',
		meta_title: 'Case studies'
	};
}

export async function entries(total: number) {
	// const client = createClient();
	// const pages = await client.getAllByType('case_study');
	return Array.from({ length: total }, (_, i) => i + 1);
	// return pages.map((page, i) => {
	// 	return {
	// 		page: i + 1
	// 	};
	// });
}
