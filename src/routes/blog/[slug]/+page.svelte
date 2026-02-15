<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import RichText from '$lib/components/blog/RichText.svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead
	title={data.article.seoTitle || `${data.article.title} - VDV Tuinen Blog`}
	description={data.article.seoDescription || data.article.summary}
	image={data.article.image}
/>

<article class="bg-offwhite pt-32 pb-24">
	<div class="mx-auto max-w-3xl px-6">
		<a
			href="/blog"
			class="inline-flex items-center gap-2 text-sm text-primary/60 transition-colors hover:text-primary"
		>
			<ArrowLeft size={16} />
			Terug naar blog
		</a>

		<header class="mt-8">
			{#if data.article.date}
				<time class="text-sm text-primary/50" datetime={data.article.date}>
					{new Date(data.article.date).toLocaleDateString('nl-NL', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
			{/if}

			<h1 class="mt-2 font-heading text-4xl font-bold text-primary md:text-5xl">
				{data.article.title}
			</h1>

			{#if data.article.author}
				<p class="mt-4 text-sm text-primary/60">Door {data.article.author}</p>
			{/if}
		</header>

		{#if data.article.image}
			<img
				src={data.article.image}
				alt={data.article.title}
				class="mt-8 w-full rounded-lg object-cover"
				loading="eager"
			/>
		{/if}

		<div class="mt-12">
			<RichText html={data.article.body} />
		</div>
	</div>
</article>
