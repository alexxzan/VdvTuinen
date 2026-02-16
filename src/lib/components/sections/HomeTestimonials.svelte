<script lang="ts">
	import { Shield } from 'lucide-svelte';
	import TestimonialCard from '$lib/components/ui/TestimonialCard.svelte';
	import { testimonials } from '$lib/data/content';
</script>

<section aria-label="Testimonials" class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Wat Klanten Zeggen</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Lees de ervaringen van onze tevreden klanten.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-3">
			{#each testimonials as testimonial}
				<TestimonialCard
					name={testimonial.name}
					location={testimonial.location}
					rating={testimonial.rating}
					text={testimonial.text}
				/>
			{/each}
		</div>

		<div class="mt-12 flex items-center justify-center gap-3 text-primary/70">
			<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/30 text-primary">
				<Shield size={20} />
			</div>
			<span class="text-sm font-medium">VCA-gecertificeerd</span>
		</div>
	</div>
</section>
