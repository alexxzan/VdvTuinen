<script lang="ts">
	import { Star, Leaf, Phone } from 'lucide-svelte';
	import { siteConfig } from '$lib/data/content';
</script>

<div class="fixed top-0 left-0 right-0 z-50 h-10 bg-primary text-offwhite">
	<div class="mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-xs md:justify-between">
		<div class="hidden items-center gap-1 md:flex">
			<Star class="h-3.5 w-3.5 fill-gold text-gold" />
			<span class="font-medium">4.9/5</span>
			<span class="text-offwhite/70">— 47 Google Reviews</span>
		</div>

		<div class="flex items-center gap-2">
			<Leaf class="h-3.5 w-3.5" />
			<span>Altijd bereikbaar</span>
			<span class="text-offwhite/40">·</span>
			<Leaf class="h-3.5 w-3.5" />
			<span>Betrokkenheid</span>
			<span class="text-offwhite/40">·</span>
			<Leaf class="h-3.5 w-3.5" />
			<span>10 jaar ervaring</span>
		</div>

		<a href="tel:{siteConfig.phone.replace(/\s/g, '')}" class="hidden items-center gap-1.5 transition-colors hover:text-gold md:flex">
			<Phone class="h-3.5 w-3.5" />
			<span>{siteConfig.phone}</span>
		</a>
	</div>
</div>
