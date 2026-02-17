<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { heroContent } from '$lib/data/content';
</script>

<section aria-label="Hero" class="relative flex min-h-screen items-center">
	<picture>
		<source
			srcset="/images/hero-homepage-1024w.webp 1024w, /images/hero-homepage-1920w.webp 1920w, /images/hero-homepage-2560w.webp 2560w"
			sizes="100vw"
			type="image/webp"
		/>
		<img
			src="/images/hero-homepage.jpg"
			alt="Tuin met vijver en natuursteen"
			class="absolute inset-0 h-full w-full object-cover"
			loading="eager"
		/>
	</picture>
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
