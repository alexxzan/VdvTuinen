<script lang="ts">
	import StepCard from '$lib/components/ui/StepCard.svelte';
	import { processSteps } from '$lib/data/content';
</script>

<section id="proces" class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Ons Proces</h2>
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
	</div>
</section>
