<script lang="ts">
	import {
		PrismicImage,
		PrismicRichText,
		PrismicText,
		PrismicLink,
		SliceZone
	} from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';

	import TriangleGrid from '$lib/components/TriangleGrid.svelte';

	import type { PeopleDocument } from '../../../../prismicio-types.js';

	export let data;

	const allAuthors = data.page.data.authors.map(
		(author) =>
			author.author as typeof author.author & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image'>;
			}
	);
</script>

<Bounded>
	<div class="relative grid w-full place-items-center gap-6 text-center">
		<TriangleGrid />
		<h1 class="text-5xl font-medium md:text-7xl">
			<PrismicText field={data.page.data.company} />
			<span class="text-accent-light block text-lg">Case Study</span>
		</h1>

		{#if allAuthors.length !== 0}
			<div class="items center flex gap-6">
				{#each allAuthors as item}
					<a
						class="group flex items-center gap-2 decoration-emerald-300 underline-offset-2 hover:underline focus-visible:underline"
						href={`/people/${item.uid}`}
					>
						<PrismicImage
							field={item.data.image}
							class="h-8 w-8 rounded-full object-cover opacity-100 transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105"
						/>{item.data.name}
					</a>
				{/each}
			</div>{/if}
		<p class="text-content mb-6 max-w-xl text-lg">
			<PrismicText field={data.page.data.description} />
		</p>
		<div style:--company="image-{data.page.uid}">
			<PrismicImage field={data.page.data.image} class="case-study__image rounded-lg opacity-100" />
		</div>
	</div>

	<div class="mx-auto mt-12 md:mt-16">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
