<script lang="ts">
	import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead
	title="Blog - VDV Tuinen"
	description="Lees onze laatste artikelen over tuinontwerp, onderhoud en inspiratie. Tips en advies van de tuinexperts van VDV Tuinen."
/>

<section class="bg-offwhite pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center">
			<h1 class="font-heading text-4xl font-bold text-primary md:text-5xl">Blog</h1>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Tips, inspiratie en het laatste nieuws over tuinontwerp en -onderhoud.
			</p>
		</div>

		{#if data.articles.length > 0}
			<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.articles as article}
					<ArticleCard
						title={article.title}
						slug={article.slug}
						summary={article.summary}
						image={article.image}
						date={article.date}
					/>
				{/each}
			</div>
		{:else}
			<div class="mt-16 text-center">
				<p class="text-lg text-primary/60">Er zijn momenteel geen blogartikelen beschikbaar.</p>
				<a href="/" class="mt-4 inline-block text-primary underline underline-offset-4 hover:text-primary/70">
					Terug naar home
				</a>
			</div>
		{/if}
	</div>
</section>
