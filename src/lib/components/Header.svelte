<script>
	import { PrismicLink } from '@prismicio/svelte';

	import IconClose from '~icons/ph/x-bold';
	import IconMenu from '~icons/ph/list-bold';

	import WordMark from './WordMark.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import clsx from 'clsx';
	import { asLink } from '@prismicio/client';
	import { page } from '$app/stores';
	import Search from './Search.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;

	let isOpen = false;
	const toggleOpen = () => (isOpen = !isOpen);
	const close = () => (isOpen = false);

	/** @param {import('@prismicio/client').LinkField} link*/
	const isActive = (link) => {
		const path = asLink(link);
		if (path === $page.url.pathname) {
			return path;
		}
	};
</script>

<header class="p-4 md:p-6">
	<nav
		class="text-content mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium md:flex-row md:items-center"
		aria-label="Main"
	>
		<div class="flex items-center justify-between">
			<a href="/" on:click={close} class="z-50">
				<WordMark />
				<span class="sr-only">{settings.data.site_title} home page</span>
			</a>

			<button
				type="button"
				class="text-content block p-2 text-3xl md:hidden"
				aria-expanded={isOpen}
				on:click={toggleOpen}
			>
				<span class="sr-only">Menu</span>
				<IconMenu aria-hidden="true" />
			</button>
		</div>

		<!-- Mobile Nav -->
		<div
			class={clsx(
				'bg-base fixed inset-0 z-40 flex flex-col items-end pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden',
				isOpen ? 'translate-x-0' : 'translate-x-[100%]'
			)}
		>
			<button
				aria-expanded={isOpen}
				type="button"
				class="text-content block p-2 text-3xl md:hidden"
				on:click={toggleOpen}
			>
				<span class="sr-only">Close</span>
				<IconClose aria-hidden="true" />
			</button>
			<ul class="grid justify-items-end gap-8">
				{#each settings.data.navigation as item (item.label)}
					<li>
						{#if item.cta_button}
							<ButtonLink
								field={item.link}
								on:click={close}
								aria-current={isActive(item.link) ? 'page' : undefined}
							>
								{item.label}
							</ButtonLink>
						{:else}
							<PrismicLink
								on:click={close}
								field={item.link}
								class=" block min-h-11 px-3 text-3xl first:mt-8"
								aria-current={isActive(item.link) ? 'page' : undefined}
							>
								{item.label}
							</PrismicLink>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Desktop Nav -->
		<ul class="hidden items-center gap-6 md:flex">
			{#each settings.data.navigation as item (item.label)}
				<li>
					{#if item.cta_button}
						<!-- <ButtonLink
							field={item.link}
							on:click={close}
							aria-current={isActive(item.link) ? 'page' : undefined}
						>
							{item.label}
						</ButtonLink> -->
					{:else}
						<PrismicLink
							on:click={close}
							field={item.link}
							class={`hover:text-content/50 inline-flex items-center rounded-full px-3 py-1 focus-visible:outline focus-visible:outline-offset-2 ${isActive(item.link) ? 'decoration-brand underline' : ''}`}
							aria-current={isActive(item.link) ? 'page' : undefined}
						>
							{item.label}
						</PrismicLink>
					{/if}
				</li>
			{/each}
			<li class="ml">
				<Search />
			</li>
		</ul>
	</nav>
</header>
