<script lang="ts">
	let { title, slug, summary, image, date }: {
		title: string;
		slug: string;
		summary: string;
		image: string;
		date: string;
	} = $props();
</script>

<a href="/blog/{slug}" class="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
	{#if image}
		<div class="h-48 overflow-hidden">
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	{/if}
	<div class="p-6">
		{#if date}
			<time class="text-sm text-primary/50" datetime={date}>
				{new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
			</time>
		{/if}
		<h3 class="mt-2 font-heading text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
			{title}
		</h3>
		{#if summary}
			<p class="mt-2 text-sm leading-relaxed text-primary/70 line-clamp-3">{summary}</p>
		{/if}
	</div>
</a>
