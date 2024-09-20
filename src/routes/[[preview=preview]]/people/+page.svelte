<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';

	export let data;
</script>

<Bounded>
	<h1 class="text-5xl font-medium md:text-7xl">{data.page.data.title}</h1>

	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
