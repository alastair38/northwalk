<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { page } from '$app/stores';
	import { PrismicLink, PrismicImage, PrismicText } from '@prismicio/svelte';
	import Image from './screenshot-default.png';
	import type { PeopleDocument } from '../../../prismicio-types';
	import type { Content } from '@prismicio/client';
	import Aside from '$lib/components/Aside.svelte';

	/** @type {import("@prismicio/client").Content.StaffSlice} */
	export let slice: Content.StaffSlice;

	const staff = slice.primary.staff_members.map(
		(person) =>
			person.person as typeof person.person & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image'>;
			}
	);
</script>

<Aside class="py-6" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h2 class="my-8 self-start text-3xl font-medium">{slice.primary.title}</h2>

	<div class="text-content grid grid-cols-1 gap-6 md:grid-cols-3">
		<!-- {#if staff.length !== 0}
			{#each staff as item}
				<div class="overflow-clip rounded-md">
					{#if $page.route.id !== '/slice-simulator'}
						<PrismicImage class="h-64 w-full  object-cover" field={item?.data?.image} />
						<div class="bg-content-200 px-6 py-3 text-base-200">
							<PrismicLink field={item}>{item?.data?.name}</PrismicLink>
						</div>
					{/if}
				</div>
			{/each}
		{/if} -->
		{#if $page.route.id === '/slice-simulator'}
			<div class="overflow-clip rounded-md">
				<img class="h-64 w-full rounded-t-md object-cover" src={Image} alt="" />
				<div class="bg-content-200 px-6 py-3 text-base-200">
					<!-- {item.person.data.name} -->

					Name here
					<!-- <PrismicLink field={item.person}>Link</PrismicLink> -->
				</div>
			</div>
		{/if}
	</div>
</Aside>
