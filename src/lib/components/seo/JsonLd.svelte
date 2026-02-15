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
			'Groen met ziel, voor een tuin die spreekt. Professionele tuinverzorging en -aanleg in de regio Noord-Holland.'
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
