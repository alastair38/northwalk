<script lang="ts">
	import type { ImageField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let image: ImageField<never>;
</script>

<div
	id="mask-header"
	class="absolute left-0 right-0 top-0 isolate -z-10 opacity-10 mix-blend-luminosity"
>
	<PrismicImage aria-hidden="true" field={image} class="h-screen w-full object-cover" />
</div>
