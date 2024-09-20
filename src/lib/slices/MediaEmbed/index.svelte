<script lang="ts">
	import { browser } from '$app/environment';
	import IconTwitter from '~icons/ph/x-logo';
	import Bounded from '$lib/components/Bounded.svelte';
	import Link from '$lib/components/Link.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import SpanHeading from '../Showcase/SpanHeading.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	export let slice: Content.MediaEmbedSlice;

	console.log(slice.primary.link);
</script>

<svelte:head>
	{#if browser}
		{#if slice.primary.link.provider_name === 'Twitter' && slice.variation === 'default'}
			<!-- The ombed doesn't work properly for Twitter so we check if the link source is from Twitter and then add the required script tag to the head -->
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		{/if}
	{/if}
</svelte:head>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="space-y-6">
		<h2>
			{slice.primary.title}
		</h2>
		<PrismicRichText field={slice.primary.description} />

		{#if slice.variation === 'default'}
			<figure
				data-provider={slice.primary.link.provider_name}
				class={`${slice.primary.link.provider_name === 'YouTube' || 'Vimeo' ? 'aspect-video' : 'aspect-auto'} mx-auto grid w-full gap-4 ${slice.primary.link.provider_name === 'Twitter' ? 'items-center justify-center' : ''}`}
			>
				{@html slice.primary.link.html}

				<figcaption class="my-4 flex h-fit flex-col items-center">
					{#if slice.primary.link.title}
						<span class="w-fit px-1 italic">{slice.primary.link.title}</span>
					{/if}

					{#if slice.primary.link.author_name}
						<span class="w-fit px-1">{slice.primary.link.author_name}</span>
					{/if}
				</figcaption>
			</figure>
		{:else}
			<figure
				data-provider={slice.primary.link.provider_name}
				class="grid grid-cols-1 gap-6 overflow-clip rounded-md bg-base shadow-2xl outline outline-1 outline-offset-4 outline-content/10 md:grid-cols-3"
			>
				{#if slice.primary.link.provider_name === 'Twitter'}
					<IconTwitter class="h-44 w-44 p-6 " />
					<Link class="col-span-2" linkType="withArrow" href={slice.primary.link.embed_url}
						>View this content from {slice.primary.link.author_name} on {slice.primary.link
							.provider_name}</Link
					>
				{:else}
					{#if slice.primary.link.thumbnail_url}
						<img
							class="aspect-square h-full object-cover"
							src={slice.primary.link.thumbnail_url}
							height={slice.primary.link.thumbnail_height}
							width={slice.primary.link.thumbnail_width}
							alt={`Thumbnail for ${slice.primary.link.title} on ${slice.primary.link.provider_name}`}
						/>
					{/if}

					<div
						class="flex flex-col items-center justify-center gap-4 p-6 text-center md:col-span-2"
					>
						<em class="px-1">{slice.primary.link.title}</em>
						<ButtonLink href={slice.primary.link.embed_url}
							>{`${slice.primary.link.provider_name === 'Spotify' ? 'Listen on' : 'View on'}`}
							{slice.primary.link.provider_name}</ButtonLink
						>
					</div>
				{/if}
			</figure>
		{/if}
	</div>
</Bounded>
