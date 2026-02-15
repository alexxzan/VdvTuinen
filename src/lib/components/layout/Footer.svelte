<script lang="ts">
	import { Facebook, Instagram, Youtube, Clock, MapPin, Phone } from 'lucide-svelte';
	import { siteConfig, footerLinks, socialLinks } from '$lib/data/content';
</script>

<footer class="bg-footer py-16 text-gold">
	<div class="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
		<!-- Brand -->
		<div>
			<a href="/" class="flex items-center gap-2">
				<img
					src="/Rond-logo-vdvtuinen.nl_-2-300x300.png"
					alt="VDV Tuinen logo"
					class="h-10 w-10 rounded-full"
				/>
				<span class="font-heading text-2xl font-bold text-offwhite">VDV Tuinen</span>
			</a>
			<p class="mt-4 text-sm leading-relaxed text-gold/80">
				Uw droomtuin begint hier. Exclusief tuinontwerp en aanleg met oog voor detail en vakmanschap in de regio Noord-Holland.
			</p>
			<div class="mt-4 space-y-2 text-sm text-gold/80">
				<div class="flex items-center gap-2">
					<MapPin size={14} />
					<span>{siteConfig.address}</span>
				</div>
				<div class="flex items-center gap-2">
					<Phone size={14} />
					<a href="tel:{siteConfig.phone}" class="hover:text-gold transition-colors">{siteConfig.phone}</a>
				</div>
				<div class="flex items-center gap-2">
					<Clock size={14} />
					<span>Ma-Vr: 07:00 - 18:00</span>
				</div>
			</div>
			<p class="mt-2 text-xs text-gold/60">KvK: {siteConfig.kvk}</p>
		</div>

		<!-- Diensten -->
		<div>
			<h3 class="font-heading text-lg font-semibold text-offwhite">Diensten</h3>
			<ul class="mt-4 space-y-3">
				{#each footerLinks.diensten as link}
					<li>
						<a href={link.href} class="text-sm text-gold/80 transition-colors hover:text-gold">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Bedrijf -->
		<div>
			<h3 class="font-heading text-lg font-semibold text-offwhite">Bedrijf</h3>
			<ul class="mt-4 space-y-3">
				{#each footerLinks.bedrijf as link}
					<li>
						<a href={link.href} class="text-sm text-gold/80 transition-colors hover:text-gold">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Social -->
		<div>
			<h3 class="font-heading text-lg font-semibold text-offwhite">Volg ons</h3>
			<div class="mt-4 flex gap-3">
				<a
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold transition-colors hover:bg-gold/30"
					aria-label="Facebook"
				>
					<Facebook size={18} />
				</a>
				<a
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold transition-colors hover:bg-gold/30"
					aria-label="Instagram"
				>
					<Instagram size={18} />
				</a>
				<a
					href={socialLinks.youtube}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold transition-colors hover:bg-gold/30"
					aria-label="YouTube"
				>
					<Youtube size={18} />
				</a>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-7xl border-t border-gold/20 px-6 pt-8 text-center text-sm text-gold/60">
		&copy; 2026 {siteConfig.name}. Alle rechten voorbehouden.
	</div>
</footer>
