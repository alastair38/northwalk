<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	export let data;
</script>

<Bounded>
	<PageHeader>
		<Heading1>
			{data.page.data.title}
		</Heading1>
	</PageHeader>
	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>
