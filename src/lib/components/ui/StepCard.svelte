<script lang="ts">
	import { Phone, Clock, CalendarCheck, PenTool } from 'lucide-svelte';

	let { number, title, description, icon }: {
		number: string;
		title: string;
		description: string;
		icon: 'phone' | 'clock' | 'calendar-check' | 'pen-tool';
	} = $props();

	const icons = {
		phone: Phone,
		clock: Clock,
		'calendar-check': CalendarCheck,
		'pen-tool': PenTool
	};
	const IconComponent = $derived(icons[icon]);
</script>

<div class="group relative flex h-full flex-col rounded-xl bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-md">
	<div class="mb-5 flex items-center justify-between">
		<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-primary transition-colors duration-500 group-hover:bg-gold/30">
			<IconComponent size={24} />
		</div>
		<span class="font-heading text-4xl font-bold text-gold/30">{number}</span>
	</div>
	<h3 class="font-heading text-lg font-semibold text-primary">{title}</h3>
	<p class="mt-2 text-sm leading-relaxed text-primary/60">{description}</p>
</div>
