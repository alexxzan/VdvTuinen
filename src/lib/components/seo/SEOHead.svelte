<script lang="ts">
	import { page } from '$app/state';

	let {
		title,
		description,
		image = ''
	}: {
		title: string;
		description: string;
		image?: string;
	} = $props();

	const canonicalUrl = $derived(`https://vdvtuinen.nl${page.url.pathname}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:locale" content="nl_NL" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="VDV Tuinen" />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
</svelte:head>
