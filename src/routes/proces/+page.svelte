<script lang="ts">
	import { ArrowRight, Award, UserCheck, Heart } from 'lucide-svelte';
	import StepCard from '$lib/components/ui/StepCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import { processSteps, whyChooseUs } from '$lib/data/content';

	const whyIcons = [Award, UserCheck, Heart];
</script>

<SEOHead
	title="Ons Proces - VDV Tuinen"
	description="Van contact tot ontwerp: ontdek hoe VDV Tuinen in vier stappen uw tuin realiseert. Persoonlijk, vakkundig en transparant."
/>

<section class="bg-offwhite pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h1 class="font-heading text-4xl font-bold text-primary md:text-5xl">Ons Proces</h1>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				In vier stappen van wens naar werkelijkheid. Wij begeleiden u door het hele traject.
			</p>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step}
				<StepCard
					number={step.number}
					title={step.title}
					description={step.description}
					icon={step.icon}
				/>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-body text-lg font-medium text-offwhite transition-colors hover:bg-primary/90"
			>
				Start uw tuinproject
				<ArrowRight size={20} />
			</a>
		</div>
	</div>
</section>

<!-- Waarom kiezen voor ons -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Waarom kiezen voor ons?</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Ontdek waarom klanten voor VDV Tuinen kiezen.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-3">
			{#each whyChooseUs as item, i}
				{@const Icon = whyIcons[i]}
				<div class="rounded-lg border border-gold/20 bg-offwhite p-8 text-center">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-primary">
						<Icon size={28} />
					</div>
					<h3 class="mt-6 font-heading text-xl font-semibold text-primary">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-primary/70">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
