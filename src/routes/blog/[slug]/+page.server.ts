import { error } from '@sveltejs/kit';
import { getDeliveryClient } from '$lib/server/kontent';
import type { Artikel } from '$lib/types/kontent';
import { ContentTypeCodenames } from '$lib/types/kontent';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const client = getDeliveryClient();
		const response = await client
			.items<Artikel>()
			.type(ContentTypeCodenames.artikel)
			.equalsFilter('elements.url__automatisch_aangemaakt_', params.slug)
			.limitParameter(1)
			.depthParameter(1)
			.toPromise();

		const item = response.data.items[0];

		if (!item) {
			error(404, 'Artikel niet gevonden');
		}

		const auteur = item.elements.auteur.linkedItems?.[0];

		return {
			article: {
				title: item.elements.titel.value,
				slug: item.elements.url__automatisch_aangemaakt_.value,
				summary: item.elements.samenvatting.value,
				body: item.elements.inhoud.value,
				image: item.elements.hoofdafbeelding.value[0]?.url ?? '',
				date: item.elements.datum.value,
				author: auteur?.elements.volledige_naam.value ?? '',
				category: item.elements.categorie.value.map((t) => t.name),
				seoTitle: item.elements.seo_titel.value,
				seoDescription: item.elements.seo_omschrijving.value
			}
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) {
			throw e;
		}
		error(404, 'Artikel niet gevonden');
	}
};
