<script>
	import { PrismicRichText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';

	export let data;
</script>

<Bounded>
	<header class="mb-12 text-5xl font-bold">
		<PrismicRichText field={data.page.data.title} />
	</header>

	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
