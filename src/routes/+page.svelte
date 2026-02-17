<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import JsonLd from '$lib/components/seo/JsonLd.svelte';
	import HomeHero from '$lib/components/sections/HomeHero.svelte';
	import HomeDiensten from '$lib/components/sections/HomeDiensten.svelte';
	import HomePortfolio from '$lib/components/sections/HomePortfolio.svelte';
	import HomeTestimonials from '$lib/components/sections/HomeTestimonials.svelte';
	import HomeCTA from '$lib/components/sections/HomeCTA.svelte';
</script>

<SEOHead
	title="VDV Tuinen - Uw tuin in goede handen"
	description="VDV Tuinen: uw specialist in tuinontwerp, tuinaanleg en tuinonderhoud in de regio Noord-Holland. Vakkundig, betrouwbaar en creatief."
/>
<JsonLd />

<HomeHero />
<HomeDiensten />
<HomePortfolio />
<HomeTestimonials />
<HomeCTA />
