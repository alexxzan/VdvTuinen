<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { navLinks } from '$lib/data/content';

	let mobileMenuOpen = $state(false);
</script>

<header class="fixed top-10 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-2">
			<img
				src="/Rond-logo-vdvtuinen.nl_-2-300x300.png"
				alt="VDV Tuinen logo"
				class="h-10 w-10 rounded-full"
			/>
			<span class="font-heading text-2xl font-bold text-primary">VDV Tuinen</span>
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a href={link.href} class="font-body text-sm font-medium text-primary hover:text-primary/70 transition-colors">
					{link.label}
				</a>
			{/each}
			<a
				href="/contact"
				class="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-primary/90"
			>
				Contact
			</a>
		</nav>

		<button
			class="text-primary md:hidden"
			onclick={() => (mobileMenuOpen = true)}
			aria-label="Menu openen"
		>
			<Menu size={24} />
		</button>
	</div>
</header>

{#if mobileMenuOpen}
	<MobileMenu onclose={() => (mobileMenuOpen = false)} />
{/if}
