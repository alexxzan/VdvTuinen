<script lang="ts">
	import { Star } from 'lucide-svelte';

	let { rating = 5 }: { rating?: number } = $props();
</script>

<div class="flex gap-1" aria-label="{rating} van 5 sterren">
	{#each Array(5) as _, i}
		<Star
			size={18}
			class={i < rating ? 'fill-gold text-gold' : 'text-gold/30'}
		/>
	{/each}
</div>
