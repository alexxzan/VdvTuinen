<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { projects } from '$lib/data/content';
</script>

<section aria-label="Portfolio" class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<header class="mb-16 text-center">
			<h2 class="font-heading text-4xl font-bold text-primary">Gerealiseerde tuinprojecten</h2>
			<p class="mx-auto mt-4 max-w-2xl text-primary/70">
				Een selectie van onze meest recente projecten
			</p>
		</header>

		<!--
			Art-gallery mosaic — intentionally irregular grid.
			Layout (md+):
			Row 1: [ 0  (7 col)     ] [ 1  (5 col)  ]
			Row 2: [ 0  continues   ] [ 1  continues ]
			Row 3: [ 0  continues   ] [ 2  (5 col)  ]
			Row 4: [ 3  (7 col)     ] [ 2  continues ]
			Row 5: [ 3  continues   ] [ 2  continues ]
			Row 6: [ 4  (4 col) ] [  5  (8 col)      ]
			Row 7: [ 4  cont.  ] [  5  continues      ]
		-->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[180px] md:gap-5">
			<!-- Project 0: Large hero — top-left -->
			<a
				href="/portfolio/{projects[0].slug}"
				class="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-7 md:col-start-1 md:row-span-3 md:row-start-1 md:aspect-auto"
			>
				<img
					src={projects[0].image}
					alt={projects[0].title}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-8">
					<h3 class="font-heading text-xl text-offwhite md:text-2xl">{projects[0].title}</h3>
				</div>
			</a>

			<!-- Project 1: Small landscape — top-right -->
			<a
				href="/portfolio/{projects[1].slug}"
				class="group relative aspect-[3/2] overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:aspect-auto"
			>
				<img
					src={projects[1].image}
					alt={projects[1].title}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<h3 class="font-heading text-lg text-offwhite">{projects[1].title}</h3>
				</div>
			</a>

			<!-- Project 2: Tall — right side -->
			<a
				href="/portfolio/{projects[2].slug}"
				class="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-5 md:col-start-8 md:row-span-3 md:row-start-3 md:aspect-auto"
			>
				<img
					src={projects[2].image}
					alt={projects[2].title}
					class="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<h3 class="font-heading text-xl text-offwhite">{projects[2].title}</h3>
				</div>
			</a>

			<!-- Project 3: Landscape — mid-left -->
			<a
				href="/portfolio/{projects[3].slug}"
				class="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-7 md:col-start-1 md:row-span-2 md:row-start-4 md:aspect-auto"
			>
				<img
					src={projects[3].image}
					alt={projects[3].title}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<h3 class="font-heading text-lg text-offwhite">{projects[3].title}</h3>
				</div>
			</a>

			<!-- Project 4: Tall narrow — bottom-left -->
			<a
				href="/portfolio/{projects[4].slug}"
				class="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-4 md:col-start-1 md:row-span-2 md:row-start-6 md:aspect-auto"
			>
				<img
					src={projects[4].image}
					alt={projects[4].title}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<h3 class="font-heading text-xl text-offwhite">{projects[4].title}</h3>
				</div>
			</a>

			<!-- Project 5: Large wide — bottom-right -->
			<a
				href="/portfolio/{projects[5].slug}"
				class="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-2xl md:col-span-8 md:col-start-5 md:row-span-2 md:row-start-6 md:aspect-auto"
			>
				<img
					src={projects[5].image}
					alt={projects[5].title}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-8">
					<h3 class="font-heading text-xl text-offwhite md:text-2xl">{projects[5].title}</h3>
				</div>
			</a>
		</div>

		<div class="mt-12 text-center">
			<a
				href="/portfolio"
				class="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/70"
			>
				Bekijk alle projecten
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>
