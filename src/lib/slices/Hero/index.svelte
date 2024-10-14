<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	import EmphasisedText from './EmphasisedText.svelte';

	import Heading1RichText from '$lib/components/Heading1RichText.svelte';
	import clsx from 'clsx';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicImage, PrismicText } from '@prismicio/svelte';

	export let slice: Content.HeroSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative">
	<div
		class={clsx(
			'absolute inset-0 -top-32 bottom-0 -z-40 w-full',
			slice.variation === 'dark'
				? 'bg-gradient-to-b from-content-dark to-content'
				: 'bg-gradient-to-b from-base-light to-base'
		)}
	>
		<div class="dotted mask-radial animate- h-full w-full text-accent/50" />
	</div>

	<div class={clsx('text-center', slice.variation === 'dark' && 'text-base')}>
		{#if slice.primary.heading}
			<PrismicRichText
				field={slice.primary.heading}
				components={{ em: EmphasisedText, heading1: Heading1RichText }}
			/>
		{/if}

		{#if slice.primary.body}
			<p class="mx-auto mt-6 max-w-2xl text-balance text-lg">
				<PrismicText field={slice.primary.body} />
			</p>
		{/if}

		{#if slice.primary.button_link}
			<ButtonLink class="mt-8" field={slice.primary.button_link}>
				{slice.primary.button_label}
			</ButtonLink>
		{/if}

		{#if slice.primary.image}
			<PrismicImage
				class="mt-16 w-fit rounded-md shadow-2xl outline outline-1 outline-offset-4 outline-base-dark/50"
				field={slice.primary.image}
			/>
		{/if}
	</div>
</Bounded>
