<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { heroContent } from '$lib/data/content';
</script>

<section aria-label="Hero" class="relative flex min-h-screen items-center">
	<img
		srcset="/images/hero-homepage-1024w.jpg 1024w, /images/hero-homepage-1920w.jpg 1920w"
		sizes="100vw"
		src="/images/hero-homepage-1920w.jpg"
		alt="Tuin met vijver en natuursteen"
		class="absolute inset-0 h-full w-full object-cover"
		loading="eager"
	/>
	<div class="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/30"></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
		<div class="max-w-2xl">
			<span class="mb-3 inline-block text-sm font-medium tracking-wide text-gold/90">
				{heroContent.tagline}
			</span>
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
