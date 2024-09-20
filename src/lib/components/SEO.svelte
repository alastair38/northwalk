<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title
		>{$page.data.title}
		{$page.url.pathname !== '/' ? ` - ${$page.data.settings.data.site_title}` : ''}</title
	>

	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{:else}
		<meta name="description" content={$page.data.settings.data.meta_description} />
	{/if}

	<link rel="canonical" href={$page.url.href} />

	{#if $page.data.meta_description}
		<meta property="og:description" content={$page.data.meta_description} />
	{:else}
		<meta property="og:description" content={$page.data.settings.data.meta_description} />
	{/if}

	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{:else}
		<meta name="og:image" content={$page.data.settings.data.og_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:site_name" content={$page.data.settings.data.site_title} />
	<meta property="og:title" content={$page.data.title} />
	<meta
		property="og:description"
		content={$page.data.meta_description || $page.data.settings.data.meta_description}
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta
		property="og:image"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		property="og:image:url"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		property="og:image:secure_url"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>

	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />
	<meta
		property="og:image:alt"
		content={$page.data.meta_image?.alt || $page.data.settings.data.og_image.alt}
	/>

	<!-- Twitter -->
	<meta name="twitter:title" content={$page.data.title} />
	<meta
		name="twitter:description"
		content={$page.data.meta_description || $page.data.settings.data.meta_description}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:image"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		name="twitter:image:alt"
		content={$page.data.meta_image?.alt || $page.data.settings.data.og_image.alt}
	/>
	<meta name="twitter:domain" content={$page.url.origin} />
</svelte:head>
