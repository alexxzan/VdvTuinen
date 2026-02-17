<script lang="ts">
	import { siteConfig } from '$lib/data/content';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: siteConfig.name,
		telephone: siteConfig.phone,
		email: siteConfig.email,
		url: siteConfig.url,
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Akkerland 8',
			addressLocality: 'Spierdijk',
			postalCode: '1641MD',
			addressRegion: 'Noord-Holland',
			addressCountry: 'NL'
		},
		openingHours: 'Mo-Fr 07:00-18:00',
		description:
			'Tuinontwerp, aanleg en onderhoud met oog voor detail en vakmanschap in de regio Noord-Holland.'
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
