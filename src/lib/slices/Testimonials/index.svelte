<script lang="ts">
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.TestimonialsSlice;
</script>

<section class=" py-24" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<TriangleGrid />
	<div class="mx-auto flex h-96 max-w-4xl items-center text-base-100">
		<div
			aria-hidden="true"
			class="-mr-16 w-4/5 scale-75 gap-6 space-y-6 rounded-md border bg-content-100 p-8 opacity-70 blur-sm"
		>
			<ul class="flex items-center justify-end gap-2">
				<li class="bg-accent-dark h-3 w-3 rounded-full"></li>
				<li class="h-3 w-3 rounded-full bg-brand-300"></li>
				<li class="h-3 w-3 rounded-full bg-base-300"></li>
			</ul>
			<p>{slice.primary.text}</p>
			<p class="font-medium italic">{slice.primary.citation}</p>
		</div>
		<blockquote class="relative w-4/5 space-y-6 rounded-md border bg-content-100 p-8">
			<ul aria-hidden="true" class="flex items-center justify-end gap-2">
				<li class="bg-accent-dark h-3 w-3 rounded-full"></li>
				<li class="h-3 w-3 rounded-full bg-brand-300"></li>
				<li class="h-3 w-3 rounded-full bg-base-300"></li>
			</ul>
			<p>{slice.primary.text}</p>
			<p class="font-medium italic">{slice.primary.citation}</p>
			<div class="absolute -bottom-8 left-0 right-0 -z-0 h-12 bg-content-100/70 blur-3xl"></div>
		</blockquote>
		<div
			aria-hidden="true"
			class="-ml-16 w-4/5 scale-75 space-y-6 rounded-md border bg-content-100 p-8 opacity-70 blur-sm"
		>
			<ul class="flex items-center justify-end gap-2">
				<li class="bg-accent-dark h-3 w-3 rounded-full"></li>
				<li class="h-3 w-3 rounded-full bg-brand-300"></li>
				<li class="h-3 w-3 rounded-full bg-base-300"></li>
			</ul>
			<p>{slice.primary.text}</p>
			<p class="font-medium italic">{slice.primary.citation}</p>
		</div>
	</div>
</section>
