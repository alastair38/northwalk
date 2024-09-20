<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { asText } from '@prismicio/client';
	import type { PageData } from './$types';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data: PageData;
</script>

<Bounded>
	<h1 class="mb-12 text-4xl font-black">Publications</h1>
	<div class="grid grid-cols-3 gap-6">
		{#if data.publications?.length !== 0}
			{#each data.publications as item}
				<div class="group overflow-clip rounded-md shadow-2xl">
					<PrismicLink
						document={item}
						class="grid font-black text-base-100 ring group-hover:text-base-200"
					>
						<PrismicImage field={item.data.image} class="h-60 w-full object-cover opacity-100" />
						<span class="bg-content-100 px-6 py-3">{item.data.title} </span>
					</PrismicLink>
				</div>
			{/each}
		{/if}
	</div>
</Bounded>
