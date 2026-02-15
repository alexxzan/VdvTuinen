<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import { projects } from '$lib/data/content';
</script>

<section id="portfolio" class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Onze Projecten</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Bekijk een selectie van onze gerealiseerde projecten en laat u inspireren voor uw eigen tuin.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard
					title={project.title}
					image={project.image}
					description={project.description}
					category={project.category}
					slug={project.slug}
				/>
			{/each}
		</div>
	</div>
</section>
