<script lang="ts">
	import StarRating from './StarRating.svelte';

	let { name, location, rating, text }: {
		name: string;
		location: string;
		rating: number;
		text: string;
	} = $props();
</script>

<div class="rounded-lg bg-offwhite p-8 shadow-sm">
	<StarRating {rating} />
	<p class="mt-4 text-sm leading-relaxed text-primary/80">"{text}"</p>
	<div class="mt-6">
		<p class="font-heading font-semibold text-primary">{name}</p>
		<p class="text-sm text-primary/60">{location}</p>
	</div>
</div>
