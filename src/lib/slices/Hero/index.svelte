<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import GraphPaper from '$lib/components/GraphPaper.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import Topography from '$lib/components/Topography.svelte';
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicLink, PrismicImage, PrismicText } from '@prismicio/svelte';

	export let slice: Content.HeroSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="text-center">
		<TriangleGrid opacity={0.5} />

		{#if slice.primary.heading}
			<Heading1 variant="impact" class="mx-auto max-w-2xl"
				><PrismicText field={slice.primary.heading} /></Heading1
			>
		{/if}

		{#if slice.primary.body}
			<p class="text-content/80 mx-auto mt-6 max-w-2xl text-balance text-lg">
				<PrismicText field={slice.primary.body} />
			</p>
		{/if}

		{#if slice.primary.button_link}
			<ButtonLink class="mt-8" field={slice.primary.button_link}>
				{slice.primary.button_label}
			</ButtonLink>
		{/if}

		{#if slice.primary.image}
			<div class="glass-container mt-16 w-fit shadow-2xl">
				<div
					class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-brand-300/50 mix-blend-screen blur-[120px] filter"
				/>
				<div
					class="bg-accent-dark/50 absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 mix-blend-screen blur-[120px] filter"
				/>
				<PrismicImage class="rounded-lg" field={slice.primary.image} />
			</div>
		{/if}
	</div>
</Bounded>
