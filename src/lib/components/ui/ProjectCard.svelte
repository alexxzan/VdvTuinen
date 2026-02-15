<script lang="ts">
	import { Leaf } from 'lucide-svelte';

	let {
		title,
		image,
		description = '',
		category = '',
		featured = false,
		slug = ''
	}: {
		title: string;
		image: string;
		description?: string;
		category?: string;
		featured?: boolean;
		slug?: string;
	} = $props();
</script>

{#snippet cardContent()}
	<div class="{featured ? 'h-72' : 'h-56'} overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
			loading="lazy"
		/>
	</div>
	<div class="p-6">
		{#if category}
			<div class="mb-3 flex items-center gap-1.5">
				<Leaf size={14} class="text-primary/40" />
				<span class="text-xs font-medium uppercase tracking-wider text-primary/50">{category}</span>
			</div>
		{/if}
		<h3 class="font-heading text-lg font-semibold text-primary">{title}</h3>
		{#if description}
			<p class="mt-2 text-sm leading-relaxed text-primary/60 line-clamp-2">{description}</p>
		{/if}
	</div>
{/snippet}

{#if slug}
<a href="/portfolio/{slug}" class="group block h-full overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-md">
	{@render cardContent()}
</a>
{:else}
<div class="group h-full overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-md">
	{@render cardContent()}
</div>
{/if}
