<script>
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import { PrismicText } from '@prismicio/svelte';

	import PlainLogo from './PlainLogo.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';

	/** @type {import("@prismicio/client").Content.CallToActionSlice} */
	export let slice;
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	wide={slice.primary.width}
	spacing={slice.primary.spacing}
	background={slice.primary.background}
	class="relative py-32 text-center font-medium md:py-40"
>
	<div
		class="glow absolute inset-0 -z-10 aspect-square w-full max-w-sm rounded-full bg-brand/50 blur-[160px] filter"
	/>
	<div class="glass-container rounded-lg bg-gradient-to-b from-base to-base-dark p-4 md:rounded-xl">
		<PlainLogo />
	</div>

	<Heading2 class=" max-w-xl text-balance font-black">{slice.primary.heading}</Heading2>

	{#if slice.primary.button_link}
		<ButtonLink field={slice.primary.button_link} class="mt-6"
			>{slice.primary.button_label || 'Learn More'}</ButtonLink
		>
	{/if}
</Bounded>
