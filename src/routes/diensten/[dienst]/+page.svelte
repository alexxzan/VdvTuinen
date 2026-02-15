<script lang="ts">
	import { ArrowLeft, ArrowRight, Leaf, Check } from 'lucide-svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import { services } from '$lib/data/content';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const otherServices = $derived(services.filter((s) => s.slug !== data.service.slug));
</script>

<SEOHead
	title="{data.service.title} - VDV Tuinen"
	description={data.service.description}
/>

<!-- Hero -->
<section class="relative bg-primary pt-32 pb-24">
	<img
		src={data.service.image}
		alt={data.service.title}
		class="absolute inset-0 h-full w-full object-cover opacity-20"
		loading="eager"
	/>
	<div class="relative mx-auto max-w-7xl px-6">
		<a
			href="/diensten"
			class="inline-flex items-center gap-2 text-sm text-gold/70 transition-colors hover:text-gold"
		>
			<ArrowLeft size={16} />
			Alle diensten
		</a>

		<div class="mt-8 max-w-2xl">
			<div class="mb-4 flex items-center gap-2">
				<Leaf size={16} class="text-gold/60" />
				<span class="text-xs font-medium uppercase tracking-wider text-gold/60">Dienst</span>
			</div>
			<h1 class="font-heading text-4xl font-bold text-offwhite md:text-5xl">
				{data.service.title}
			</h1>
			<p class="mt-4 text-lg leading-relaxed text-gold">
				{data.service.description}
			</p>
		</div>
	</div>
</section>

<!-- Content -->
<section class="bg-offwhite py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-16 lg:grid-cols-5">
			<!-- Main content -->
			<div class="lg:col-span-3">
				<h2 class="font-heading text-2xl font-bold text-primary">Wat wij doen</h2>
				<p class="mt-4 leading-relaxed text-primary/70">
					{data.service.longDescription}
				</p>

				<div class="mt-12">
					<h3 class="font-heading text-xl font-semibold text-primary">Wat u kunt verwachten</h3>
					<ul class="mt-6 space-y-4">
						{#each data.service.highlights as highlight}
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

			<!-- Image -->
			<div class="lg:col-span-2">
				<img
					src={data.service.image}
					alt={data.service.title}
					class="w-full rounded-xl object-cover shadow-sm"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Other services -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="font-heading text-2xl font-bold text-primary">Onze andere diensten</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			{#each otherServices as service}
				<a
					href="/diensten/{service.slug}"
					class="group flex items-center gap-3 rounded-lg bg-offwhite p-4 transition-shadow duration-500 hover:shadow-md"
				>
					<div class="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
						<img
							src={service.image}
							alt={service.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
						/>
					</div>
					<span class="font-heading text-sm font-semibold text-primary">{service.title}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-primary py-24">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<h2 class="font-heading text-4xl font-bold text-offwhite">Interesse in {data.service.title.toLowerCase()}?</h2>
		<p class="mt-4 text-lg text-gold">
			Neem vrijblijvend contact met ons op en ontdek wat wij voor u kunnen betekenen.
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
