<script lang="ts">
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import type { PostDocument } from '../../prismicio-types';
	import Link from './Link.svelte';
	import Heading2 from './Heading2.svelte';

	export let item: PostDocument<string>;
</script>

<div class="w-full overflow-clip rounded-md shadow-2xl">
	<PrismicImage field={item.data.image} />
	<div class="space-y-4 p-4">
		<Heading2 variant="xsmall" class="font-black">
			{item.data.title}
		</Heading2>
		<PrismicRichText field={item.data.excerpt} />
		<Link
			document={item}
			aria-label={`Read ${item.data.title} ${item.type.replace(/_/g, ' ')}`}
			linkType="withArrow">View Details</Link
		>
	</div>
</div>
