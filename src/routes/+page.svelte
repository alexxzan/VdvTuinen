<script lang="ts">
	import { ArrowRight, Pencil, Hammer, Scissors, TreeDeciduous, Fence, Car } from 'lucide-svelte';
	import { Shield } from 'lucide-svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import TestimonialCard from '$lib/components/ui/TestimonialCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import JsonLd from '$lib/components/seo/JsonLd.svelte';
	import { heroContent, services, projects, testimonials } from '$lib/data/content';

	const iconMap: Record<string, typeof Pencil> = {
		pencil: Pencil,
		hammer: Hammer,
		scissors: Scissors,
		'tree-deciduous': TreeDeciduous,
		fence: Fence,
		car: Car
	};
</script>

<SEOHead
	title="VDV Tuinen - Groen met ziel, voor een tuin die spreekt"
	description="VDV Tuinen: uw specialist in tuinontwerp, tuinaanleg en tuinonderhoud in de regio Noord-Holland. Vakkundig, betrouwbaar en creatief."
/>
<JsonLd />

<!-- Hero -->
<section class="relative flex min-h-screen items-center">
	<img
		src={heroContent.image}
		alt="Prachtige tuin"
		class="absolute inset-0 h-full w-full object-cover"
		loading="eager"
	/>
	<div class="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/30"></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
		<div class="max-w-2xl">
			<h1 class="font-heading text-5xl font-bold leading-tight text-offwhite md:text-6xl lg:text-7xl">
				{heroContent.title}
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-gold md:text-xl">
				{heroContent.subtitle}
			</p>
			<a
				href="/contact"
				class="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-body text-lg font-medium text-primary transition-colors hover:bg-gold/90"
			>
				{heroContent.cta}
				<ArrowRight size={20} />
			</a>
		</div>
	</div>
</section>

<!-- Diensten teaser -->
<section class="bg-offwhite py-24">
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

<!-- Portfolio teaser -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Onze Projecten</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Bekijk een selectie van onze gerealiseerde projecten.
			</p>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-3">
			{#each projects.slice(0, 3) as project}
				<ProjectCard title={project.title} image={project.image} description={project.description} category={project.category} />
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/portfolio"
				class="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/70"
			>
				Bekijk alle projecten
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="bg-offwhite py-24">
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

<!-- CTA -->
<section class="bg-primary py-24">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<h2 class="font-heading text-4xl font-bold text-offwhite">Klaar om te beginnen?</h2>
		<p class="mt-4 text-lg text-gold">
			Neem contact met ons op voor een vrijblijvend adviesgesprek en ontdek wat wij voor uw tuin kunnen betekenen.
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
