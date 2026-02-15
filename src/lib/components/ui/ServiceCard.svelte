<script lang="ts">
	import { Pencil, Hammer, Scissors, TreeDeciduous, Fence, Car } from 'lucide-svelte';

	let { title, description, icon, image }: {
		title: string;
		description: string;
		icon: 'pencil' | 'hammer' | 'scissors' | 'tree-deciduous' | 'fence' | 'car';
		image: string;
	} = $props();

	const icons = {
		pencil: Pencil,
		hammer: Hammer,
		scissors: Scissors,
		'tree-deciduous': TreeDeciduous,
		fence: Fence,
		car: Car
	};
	const IconComponent = $derived(icons[icon]);
</script>

<div class="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
	<div class="h-64 overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
		/>
	</div>
	<div class="p-6">
		<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/30 text-primary">
			<IconComponent size={28} />
		</div>
		<h3 class="font-heading text-xl font-semibold text-primary">{title}</h3>
		<p class="mt-2 text-sm leading-relaxed text-primary/70">{description}</p>
	</div>
</div>
