<script lang="ts">
	import { ArrowLeft, ArrowRight, Leaf, Check } from 'lucide-svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead
	title="{data.project.title} - VDV Tuinen Portfolio"
	description={data.project.description}
/>

<!-- Hero -->
<section class="relative bg-primary pt-32 pb-24">
	<img
		src={data.project.image}
		alt={data.project.title}
		class="absolute inset-0 h-full w-full object-cover opacity-20"
		loading="eager"
	/>
	<div class="relative mx-auto max-w-7xl px-6">
		<a
			href="/portfolio"
			class="inline-flex items-center gap-2 text-sm text-gold/70 transition-colors hover:text-gold"
		>
			<ArrowLeft size={16} />
			Alle projecten
		</a>

		<div class="mt-8 max-w-2xl">
			<div class="mb-4 flex items-center gap-2">
				<Leaf size={16} class="text-gold/60" />
				<span class="text-xs font-medium uppercase tracking-wider text-gold/60">{data.project.category}</span>
			</div>
			<h1 class="font-heading text-4xl font-bold text-offwhite md:text-5xl">
				{data.project.title}
			</h1>
			<p class="mt-4 text-lg leading-relaxed text-gold">
				{data.project.description}
			</p>
		</div>
	</div>
</section>

<!-- Content -->
<section class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-16 lg:grid-cols-5">
			<div class="lg:col-span-3">
				<h2 class="font-heading text-2xl font-bold text-primary">Over dit project</h2>
				<p class="mt-4 leading-relaxed text-primary/70">
					{data.project.longDescription}
				</p>

				<div class="mt-12">
					<h3 class="font-heading text-xl font-semibold text-primary">Kenmerken</h3>
					<ul class="mt-6 space-y-4">
						{#each data.project.highlights as highlight}
							<li class="flex items-start gap-3">
								<div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
									<Check size={14} class="text-primary" />
								</div>
								<span class="text-primary/70">{highlight}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="lg:col-span-2">
				<img
					src={data.project.image}
					alt={data.project.title}
					class="w-full rounded-xl object-cover shadow-sm"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Other projects -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="font-heading text-2xl font-bold text-primary">Andere projecten</h2>
		<div class="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.otherProjects.slice(0, 3) as project}
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
