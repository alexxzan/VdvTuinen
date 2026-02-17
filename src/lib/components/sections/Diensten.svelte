<script lang="ts">
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import { services } from '$lib/data/content';
</script>

<section id="diensten" class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Onze diensten</h2>
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
				/>
			{/each}
		</div>
	</div>
</section>
