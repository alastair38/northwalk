<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Link from '$lib/components/Link.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import type { PageData } from '../../$types';

	export let data;
</script>

<Bounded>
	<header class="prose space-y-6 text-center">
		<h1 class="text-3xl font-black">{data.page.data.title}</h1>
		<PrismicRichText field={data.page.data.description} />
		<p class="text-pretty">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel accusantium, sit explicabo
			maiores, tenetur dicta mollitia architecto consectetur obcaecati rerum voluptatibus, et
			repellendus totam earum deleniti. Consequatur, itaque quod!
		</p>
		<hr class="border-content/10" />
	</header>
	<div class="grid grid-cols-3 gap-6 py-12">
		{#each data.publications.results as item}
			<div class="w-full space-y-6 rounded-md p-6 shadow-2xl">
				<h2 class="text-xl font-black">{item.data.title}</h2>
				<PrismicRichText field={item.data.body} />
				<Link document={item} linkType="withArrow">View</Link>
			</div>{/each}
	</div>
</Bounded>
