<script lang="ts">
	import { asText, asDate, type Content } from '@prismicio/client';
	import { page } from '$app/stores';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

	import Link from '$lib/components/Link.svelte';
	export let slice: Content.LatestArticlesSlice;
</script>

<aside
	class="relative mx-auto flex w-full max-w-6xl flex-col items-center"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if $page.data.settings.data.theme !== 'ice'}
		<div class="bg-accent-dark/50 absolute left-0 top-0 -z-10 h-1/3 w-1/2 blur-[120px]" />
		<div class="absolute bottom-0 right-0 -z-10 h-1/3 w-1/2 bg-brand-300/30 blur-[120px]" />
	{/if}

	<div class="glas-container w-full space-y-8 rounded-lg bg-gradient-to-b p-8 md:rounded-xl">
		<h2 class="max-w-xl text-balance text-3xl font-black">
			{slice.primary.heading}
		</h2>

		<PrismicRichText field={slice.primary.body} />
		<!-- {#if $page.route.id === '/slice-simulator'} -->
		<div class="space-y-6">
			<!-- loop through latest articles - fetched in layout.server.ts and available on the $page object -->
			{#each $page.data.articles.results as article}
				<!-- if the current page is in the articles array, do not show it -->
				{#if $page.data.page.id !== article.id}
					<article
						class="space-between bg-base/70 flex w-full items-center overflow-clip rounded-md border border-content-100/20 shadow-xl shadow-content-100/10"
					>
						<PrismicImage class="h-60 w-60 object-cover" field={article.data.image} />
						<div class="p-6">
							<div>
								<h3 class=" text-2xl font-medium">
									{asText(article.data.company)}
								</h3>
								<time datetime={article.first_publication_date} class="text-xs italic">
									{asDate(article.first_publication_date)?.toLocaleDateString('en-GB', {
										day: 'numeric',
										month: 'long',
										year: 'numeric'
									})}
								</time>
							</div>
							{#if article.data.meta_description}
								<p class="mb-8 mt-4 text-sm">
									{article.data.meta_description}
								</p>
							{/if}
							<div class="grid-background"></div>
							<Link linkType="withArrow" field={article}>Find out</Link>
						</div>
					</article>
				{/if}
			{/each}
			<!-- {:else}
			<p>What up</p>
		{/if} -->
		</div>
	</div>
</aside>

<style>
	.grid-background {
		background-image: url('/assets/grid-pattern.png');

		position: absolute;

		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.15;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
	}
</style>
