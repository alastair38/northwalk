import * as prismic from '@prismicio/client';
import { type CreateClientConfig, enableAutoPreviews } from '@prismicio/svelte/kit';
import sm from '../../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = import.meta.env.VITE_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
	{ type: 'page', path: '/', uid: 'home' },
	{ type: 'page', path: '/:uid' },
	{ type: 'case_study', path: '/case-study/:uid' },
	{ type: 'people', path: '/people/:uid' },
	{ type: 'publications', path: '/publications/:uid' },
	{ type: 'categories', path: '/publications/categories/:uid' },
	{ type: 'team', path: '/people' },
	{ type: 'post', path: '/articles/:uid' }
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = ({ cookies, ...config }: CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		defaultParams: {
			fetchLinks: [
				'categories.image', // The name of the type and the name of the field
				'categories.title', // Add as many fields as you need
				'categories.description'
			]
		},
		...config
	});

	enableAutoPreviews({ client, cookies });

	return client;
};
