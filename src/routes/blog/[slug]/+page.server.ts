import { error } from '@sveltejs/kit';
import { getDeliveryClient } from '$lib/server/kontent';
import type { Article } from '$lib/types/kontent';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const client = getDeliveryClient();
		const response = await client
			.items<Article>()
			.type('article')
			.equalsFilter('elements.slug', params.slug)
			.limitParameter(1)
			.toPromise();

		const item = response.data.items[0];

		if (!item) {
			error(404, 'Artikel niet gevonden');
		}

		return {
			article: {
				title: item.elements.title.value,
				slug: item.elements.slug.value,
				summary: item.elements.summary.value,
				body: item.elements.body.value,
				image: item.elements.featured_image.value[0]?.url ?? '',
				date: item.elements.published_date.value,
				author: item.elements.author.value,
				seoTitle: item.elements.seo_title.value,
				seoDescription: item.elements.seo_description.value
			}
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) {
			throw e;
		}
		error(404, 'Artikel niet gevonden');
	}
};
