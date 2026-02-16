import { getDeliveryClient } from '$lib/server/kontent';
import type { Artikel } from '$lib/types/kontent';
import { ContentTypeCodenames } from '$lib/types/kontent';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const client = getDeliveryClient();
		const response = await client
			.items<Artikel>()
			.type(ContentTypeCodenames.artikel)
			.orderByDescending('elements.datum')
			.limitParameter(12)
			.toPromise();

		const articles = response.data.items.map((item) => ({
			title: item.elements.titel.value,
			slug: item.elements.url__automatisch_aangemaakt_.value,
			summary: item.elements.samenvatting.value,
			image: item.elements.hoofdafbeelding.value[0]?.url ?? '',
			date: item.elements.datum.value,
			category: item.elements.categorie.value.map((t) => t.name)
		}));

		return { articles };
	} catch {
		return { articles: [] };
	}
};
