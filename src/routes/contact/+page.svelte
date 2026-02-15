<script lang="ts">
	import { enhance } from '$app/forms';
	import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import { siteConfig } from '$lib/data/content';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<SEOHead
	title="Contact - VDV Tuinen"
	description="Neem contact op met VDV Tuinen voor een vrijblijvende offerte of advies over tuinontwerp, tuinaanleg en tuinonderhoud."
/>

<section class="bg-primary pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Left: Info -->
			<div>
				<h1 class="font-heading text-4xl font-bold text-offwhite md:text-5xl">Neem Contact Op</h1>
				<p class="mt-4 text-lg text-gold">
					Heeft u een vraag of wilt u een vrijblijvende offerte? Neem gerust contact met ons op.
				</p>

				<div class="mt-12 space-y-6">
					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
							<Phone size={20} />
						</div>
						<div>
							<p class="text-sm text-gold/70">Telefoon</p>
							<a href="tel:{siteConfig.phone}" class="text-offwhite hover:text-gold transition-colors">
								{siteConfig.phone}
							</a>
						</div>
					</div>

					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
							<Mail size={20} />
						</div>
						<div>
							<p class="text-sm text-gold/70">E-mail</p>
							<a href="mailto:{siteConfig.email}" class="text-offwhite hover:text-gold transition-colors">
								{siteConfig.email}
							</a>
						</div>
					</div>

					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
							<MapPin size={20} />
						</div>
						<div>
							<p class="text-sm text-gold/70">Adres</p>
							<p class="text-offwhite">{siteConfig.address}</p>
						</div>
					</div>

					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
							<Clock size={20} />
						</div>
						<div>
							<p class="text-sm text-gold/70">Werkuren</p>
							<p class="text-offwhite">Ma - Vr: 07:00 - 18:00</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right: Form -->
			<div class="rounded-lg bg-white p-8 shadow-xl">
				{#if form?.success}
					<div class="rounded-lg bg-green-50 p-6 text-center">
						<p class="font-heading text-xl font-semibold text-primary">Bedankt voor uw bericht!</p>
						<p class="mt-2 text-sm text-primary/70">Wij nemen zo snel mogelijk contact met u op.</p>
					</div>
				{:else}
					<form method="POST" use:enhance class="space-y-6">
						<div class="grid gap-6 md:grid-cols-2">
							<div>
								<label for="firstName" class="block text-sm font-medium text-primary">Voornaam</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									value={form?.values?.firstName ?? ''}
									required
									class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
									placeholder="Uw voornaam"
								/>
								{#if form?.errors?.firstName}
									<p class="mt-1 text-sm text-red-600">{form.errors.firstName}</p>
								{/if}
							</div>

							<div>
								<label for="lastName" class="block text-sm font-medium text-primary">Achternaam</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									value={form?.values?.lastName ?? ''}
									required
									class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
									placeholder="Uw achternaam"
								/>
								{#if form?.errors?.lastName}
									<p class="mt-1 text-sm text-red-600">{form.errors.lastName}</p>
								{/if}
							</div>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-primary">E-mail</label>
							<input
								type="email"
								id="email"
								name="email"
								value={form?.values?.email ?? ''}
								required
								class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								placeholder="uw@email.nl"
							/>
							{#if form?.errors?.email}
								<p class="mt-1 text-sm text-red-600">{form.errors.email}</p>
							{/if}
						</div>

						<div>
							<label for="phone" class="block text-sm font-medium text-primary">Telefoon</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={form?.values?.phone ?? ''}
								class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								placeholder="06 12345678"
							/>
						</div>

						<div>
							<label for="service" class="block text-sm font-medium text-primary">Dienst</label>
							<select
								id="service"
								name="service"
								class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
							>
								<option value="">Selecteer een dienst (optioneel)</option>
								<option value="ontwerp">Ontwerp</option>
								<option value="aanleg">Aanleg</option>
								<option value="onderhoud">Onderhoud</option>
								<option value="vlonders">Vlonders</option>
								<option value="schutting">Schutting</option>
								<option value="opritten">Opritten</option>
								<option value="anders">Anders</option>
							</select>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-primary">Bericht</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
								class="mt-1 w-full rounded-lg border border-primary/20 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								placeholder="Vertel ons over uw project..."
							>{form?.values?.message ?? ''}</textarea>
							{#if form?.errors?.message}
								<p class="mt-1 text-sm text-red-600">{form.errors.message}</p>
							{/if}
						</div>

						<button
							type="submit"
							class="w-full rounded-lg bg-primary px-6 py-3 font-medium text-offwhite transition-colors hover:bg-primary/90"
						>
							Verstuur bericht
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
