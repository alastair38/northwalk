<script lang="ts">
	import { enhance } from '$app/forms';
	import IconSearch from '~icons/ph/magnifying-glass-light';

	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import Button from './Button.svelte';

	export let sending = false;
	$: searchTerm = '';

	export let searchData:
		| {
				type: 'success';
				status: number;
				data?: Record<string, any> | undefined | any;
		  }
		| undefined = undefined;
</script>

<form
	method="POST"
	action="/search?/search"
	class="mt-24 w-full"
	use:enhance={() => {
		sending = true;

		return async ({ update, result }) => {
			await update({ reset: false });

			if (result.type === 'success') {
				searchData = result;
			}

			setTimeout(() => {
				sending = false;
			}, 3000);
		};
	}}
>
	<div
		class="focus-within:border-brand border-brand-light/10 group flex items-center gap-3 border-b p-2"
	>
		<label aria-label="search" for="searchInput" class="text-content/80"
			><IconSearch class="h-6 w-6 " />
		</label>

		<!-- svelte-ignore a11y-autofocus --- this retains focus on the input field after a search -->
		<input
			autofocus={sending}
			autocomplete="off"
			type="text"
			id="searchInput"
			bind:value={searchTerm}
			name="search"
			class="placeholder:text-brand text-content/80 block w-full bg-transparent py-2.5 text-sm focus:outline-none"
			placeholder="enter your search term ..."
			required
		/>

		<Button btnType="submit" disabled={sending} type="submit">Search</Button>

		<Button
			type="button"
			on:click={() => {
				searchTerm = '';
				searchData = undefined;
			}}
		>
			Clear
		</Button>
	</div>
</form>

{#if searchData?.type === 'success'}
	<div class="mt-12 flex w-full flex-col gap-6">
		<p class="text-center">
			Search results for <span class="text-content/80 italic">{`${searchTerm}`}</span>
		</p>
		{#each searchData?.data?.publications as item}
			<div class=" focus-within:bg-content/10 border-content/10 border-b p-2">
				<PrismicLink
					document={item}
					class="text-content hover:text-content/50 group flex items-end justify-between transition-colors duration-200   focus:outline-none"
				>
					<div>
						<h2 class="hover:text-content/50 font-bold">
							<PrismicText field={item.data.company} />
						</h2>
						<p><PrismicText field={item.data.description} /></p>
					</div>
					<span
						class="bg-brand-light/30 h-fit rounded-full px-3 py-1 text-sm font-light capitalize"
					>
						{item.type.replace(/_/g, ' ')}
					</span>
				</PrismicLink>
			</div>
		{/each}
	</div>
{/if}
