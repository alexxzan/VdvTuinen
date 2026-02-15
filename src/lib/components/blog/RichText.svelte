<script lang="ts">
	let { html }: { html: string } = $props();
</script>

<div class="rich-text">
	{@html html}
</div>

<style>
	.rich-text :global(h2) {
		font-family: var(--font-heading);
		font-size: 1.875rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--color-primary);
	}

	.rich-text :global(h3) {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-primary);
	}

	.rich-text :global(p) {
		margin-bottom: 1rem;
		line-height: 1.75;
		color: color-mix(in srgb, var(--color-primary) 80%, transparent);
	}

	.rich-text :global(a) {
		color: var(--color-primary);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.rich-text :global(a:hover) {
		color: color-mix(in srgb, var(--color-primary) 70%, transparent);
	}

	.rich-text :global(ul),
	.rich-text :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.rich-text :global(ul) {
		list-style-type: disc;
	}

	.rich-text :global(ol) {
		list-style-type: decimal;
	}

	.rich-text :global(li) {
		margin-bottom: 0.5rem;
		line-height: 1.75;
	}

	.rich-text :global(blockquote) {
		border-left: 4px solid var(--color-gold);
		padding-left: 1rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: color-mix(in srgb, var(--color-primary) 70%, transparent);
	}

	.rich-text :global(img) {
		border-radius: 0.5rem;
		margin: 1.5rem 0;
		max-width: 100%;
		height: auto;
	}
</style>
