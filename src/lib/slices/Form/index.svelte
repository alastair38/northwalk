<script lang="ts">
	import { enhance } from '$app/forms';

	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.FormSlice;

	export let sending = false;
	export let form: {
		type: 'success';
		status: number;
		data?: Record<string, any> | undefined;
	};
</script>

<Bounded class="w-full" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="self-start">
		<PrismicRichText field={slice.primary.description} />
	</div>
	<form
		method="POST"
		action="/search?/email"
		class="w-full"
		use:enhance={() => {
			sending = true;

			return async ({ update, result }) => {
				await update();

				if (result.type === 'success') {
					form = result;
				}

				setTimeout(() => {
					sending = false;
				}, 3000);
			};
		}}
	>
		<div>
			<div
				class={`mx-auto mb-6 flex h-12 items-center ${form?.type === 'success'} ? 'bg-green-300' : ''} p-4`}
			>
				{#if form?.type === 'success' && sending}
					<p class="mx-auto">Thank you for your message {form.data?.email}</p>

					<pre>{JSON.stringify(form, null, 2)}</pre>
				{/if}
			</div>
			<div />
			<div class="mb-5">
				<label for="email" class="mb-2 block text-sm font-medium text-content/80">Your email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg border p-2.5 text-sm text-content/80"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div class="mb-5">
				<label for="message" class="mb-2 block text-sm font-medium text-content/80"
					>Your message</label
				>
				<textarea
					id="message"
					name="message"
					class="border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 block w-full rounded-lg border p-2.5 text-sm text-content/80"
					required
				/>
			</div>
			<div class="mb-5 flex items-start">
				<div class="flex h-5 items-center">
					<input
						id="remember"
						type="checkbox"
						name="remember"
						class="focus:ring-3 border-gray-300 bg-gray-50 focus:ring-blue-300 h-4 w-4 rounded border"
					/>
				</div>
				<label for="remember" class="ms-2 text-sm font-medium text-content/80">Remember me</label>
			</div>
			<!-- <button
				disabled={sending}
				type="submit"
				class="bg-content w-full rounded-lg px-5 py-2.5 text-center text-base text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-5 sm:w-auto"
				>Submit</button
			> -->
			<Button disabled={sending} type="submit" btnType="submit">Submit</Button>
		</div>
	</form>
</Bounded>
