<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import clsx from 'clsx';
	import SpanHeading from './SpanHeading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicImage, PrismicText } from '@prismicio/svelte';

	import IconGear from '~icons/ph/gear';
	import IconCycle from '~icons/ph/arrows-clockwise';
	import Heading2 from '$lib/components/Heading2.svelte';

	/** @type {import("@prismicio/client").Content.ShowcaseSlice} */
	export let slice: Content.ShowcaseSlice;

	const icons = {
		gear: IconGear,
		cycle: IconCycle
	};
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative">
	<div
		class="showcase__glow from-accent-light to-accent-dark absolute left-72 top-0 -z-10 aspect-square w-60 max-w-2xl rounded-full bg-gradient-to-b opacity-0 blur-[50px] filter"
	/>
	{#if slice.primary.heading}
		<Heading2
			variant="impact"
			class="from-brand-dark to-brand-light max-w-2xl bg-gradient-to-br bg-clip-text text-center text-transparent"
		>
			<PrismicRichText field={slice.primary.heading} components={{ heading2: SpanHeading }} />
		</Heading2>
	{/if}
	<div
		class="to-accent-dark/95 from-content relative mt-16 grid items-center gap-8 rounded-xl bg-gradient-to-b px-8 py-8 text-base backdrop-blur-sm lg:grid-cols-6 lg:gap-0 lg:py-12"
	>
		<div class="grid-background" />

		<div class="md:col-span-2 md:pr-6">
			{#if slice.primary.icon}
				<div aria-hidden="true" class="bg-brand w-fit rounded-lg p-2 text-2xl">
					<svelte:component this={icons[slice.primary.icon]} />
				</div>
			{/if}
			{#if slice.primary.subheading}
				<h3 class="mt-6 text-2xl font-normal">
					<PrismicText field={slice.primary.subheading} />
				</h3>
			{/if}
			{#if slice.primary.body}
				<div class="mt-4 max-w-xl space-y-4">
					<PrismicRichText field={slice.primary.body} />
				</div>
			{/if}
			{#if slice.primary.button_link}
				<ButtonLink field={slice.primary.button_link} class="mt-6"
					>{slice.primary.button_text || 'Learn more'}</ButtonLink
				>
			{/if}
		</div>

		<PrismicImage
			field={slice.primary.image}
			class={clsx(
				'opacity-90 shadow-2xl lg:col-span-4 lg:pt-0',
				slice.variation === 'reverse'
					? 'lg:order-1 lg:translate-x-[15%]'
					: 'lg:-order-1 lg:translate-x-[-15%]'
			)}
			sizes="(max-width: 768px) 100vw, 50vw"
		/>
	</div>
</Bounded>

<style>
	.grid-background {
		background-image: url('/assets/grid-pattern.png');
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.35;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
	}
</style>
