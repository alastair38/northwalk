<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { asText } from '@prismicio/client';
	import type { PageData } from './$types';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data: PageData;
</script>

<Bounded>
	<h1 class="mb-12 text-4xl font-medium">Articles</h1>
</Bounded>
