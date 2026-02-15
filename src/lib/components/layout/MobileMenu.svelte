<script lang="ts">
	import { X } from 'lucide-svelte';
	import { navLinks } from '$lib/data/content';

	let { onclose }: { onclose: () => void } = $props();
</script>

<div
	class="fixed inset-0 z-50 flex flex-col bg-primary"
	role="dialog"
	aria-modal="true"
	aria-label="Navigatiemenu"
>
	<div class="flex items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-2" onclick={onclose}>
			<img
				src="/Rond-logo-vdvtuinen.nl_-2-300x300.png"
				alt="VDV Tuinen logo"
				class="h-10 w-10 rounded-full"
			/>
			<span class="font-heading text-2xl font-bold text-offwhite">VDV Tuinen</span>
		</a>
		<button class="text-offwhite" onclick={onclose} aria-label="Menu sluiten">
			<X size={24} />
		</button>
	</div>

	<nav class="flex flex-1 flex-col items-center justify-center gap-8">
		{#each navLinks as link}
			<a
				href={link.href}
				class="font-heading text-2xl text-offwhite hover:text-gold transition-colors"
				onclick={onclose}
			>
				{link.label}
			</a>
		{/each}
		<a
			href="/contact"
			class="mt-4 rounded-lg bg-gold px-8 py-3 font-body text-lg font-medium text-primary transition-colors hover:bg-gold/90"
			onclick={onclose}
		>
			Contact
		</a>
	</nav>
</div>
