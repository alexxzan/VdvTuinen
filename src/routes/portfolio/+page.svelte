<script lang="ts">
	import { ArrowRight, Leaf } from 'lucide-svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import { projects } from '$lib/data/content';
</script>

<SEOHead
	title="Portfolio - VDV Tuinen"
	description="Bekijk onze gerealiseerde tuinprojecten. Van luxe groene tuinen tot vlonders en schuttingen, laat u inspireren door ons werk."
/>

<!-- Hero header -->
<section class="bg-offwhite pt-32 pb-16">
	<div class="mx-auto max-w-7xl px-6 text-center">
		<div class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
			<Leaf size={24} class="text-primary" />
		</div>
		<h1 class="font-heading text-4xl font-bold text-primary md:text-5xl">Onze Projecten</h1>
		<p class="mx-auto mt-4 max-w-2xl text-primary/70">
			Elke tuin vertelt een verhaal. Ontdek hoe wij dromen omtoveren tot groene werkelijkheid.
		</p>
	</div>
</section>

<!-- Featured project -->
<section class="bg-offwhite pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<a href="/portfolio/{projects[0].slug}" class="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-md">
			<div class="grid md:grid-cols-2">
				<div class="h-72 md:h-full overflow-hidden">
					<img
						src={projects[0].image}
						alt={projects[0].title}
						class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						loading="eager"
					/>
				</div>
				<div class="flex flex-col justify-center p-8 md:p-12">
					<div class="mb-3 flex items-center gap-1.5">
						<Leaf size={14} class="text-primary/40" />
						<span class="text-xs font-medium uppercase tracking-wider text-primary/50">{projects[0].category}</span>
					</div>
					<h2 class="font-heading text-2xl font-bold text-primary md:text-3xl">{projects[0].title}</h2>
					<p class="mt-4 leading-relaxed text-primary/60">{projects[0].description}</p>
				</div>
			</div>
		</a>
	</div>
</section>

<!-- Nature divider -->
<div class="flex items-center justify-center gap-4 py-12">
	<div class="h-px w-16 bg-gold/30"></div>
	<Leaf size={20} class="text-gold/50" />
	<div class="h-px w-16 bg-gold/30"></div>
</div>

<!-- Project grid -->
<section class="bg-white pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects.slice(1) as project}
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

<!-- CTA -->
<section class="bg-primary py-24">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<h2 class="font-heading text-4xl font-bold text-offwhite">Laat uw tuin tot leven komen</h2>
		<p class="mt-4 text-lg text-gold">
			Heeft u een idee voor uw tuin? Wij denken graag met u mee en maken er iets moois van.
		</p>
		<a
			href="/contact"
			class="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-body text-lg font-medium text-primary transition-colors hover:bg-gold/90"
		>
			Neem contact op
			<ArrowRight size={20} />
		</a>
	</div>
</section>
