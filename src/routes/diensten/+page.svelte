<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import { services } from '$lib/data/content';
</script>

<SEOHead
	title="Onze diensten - VDV Tuinen"
	description="VDV Tuinen biedt tuinontwerp, tuinaanleg, tuinonderhoud, vlonders, schuttingen en opritten. Ontdek ons complete pakket aan tuindiensten."
/>

<section class="bg-offwhite pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h1 class="font-heading text-4xl font-bold text-primary md:text-5xl">Onze diensten</h1>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Van ontwerp tot onderhoud, wij bieden een compleet pakket aan tuindiensten om uw
				buitenruimte tot leven te brengen.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<ServiceCard
					title={service.title}
					description={service.description}
					icon={service.icon}
					image={service.image}
					slug={service.slug}
				/>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-body text-lg font-medium text-offwhite transition-colors hover:bg-primary/90"
			>
				Vrijblijvende offerte aanvragen
				<ArrowRight size={20} />
			</a>
		</div>
	</div>
</section>
