<script lang="ts">
	import { ArrowRight, Pencil, Hammer, Scissors, TreeDeciduous, Fence, Car } from 'lucide-svelte';
	import { services } from '$lib/data/content';

	const iconMap: Record<string, typeof Pencil> = {
		pencil: Pencil,
		hammer: Hammer,
		scissors: Scissors,
		'tree-deciduous': TreeDeciduous,
		fence: Fence,
		car: Car
	};
</script>

<section aria-label="Diensten" class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Onze Diensten</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Van ontwerp tot onderhoud, wij bieden een compleet pakket aan tuindiensten.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				{@const Icon = iconMap[service.icon]}
				<div class="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
					<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/30 text-primary">
						<Icon size={28} />
					</div>
					<h3 class="font-heading text-xl font-semibold text-primary">{service.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-primary/70">{service.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/diensten"
				class="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/70"
			>
				Bekijk alle diensten
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>
