import { getDeliveryClient } from '$lib/server/kontent';
import type { Article } from '$lib/types/kontent';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const client = getDeliveryClient();
		const response = await client
			.items<Article>()
			.type('article')
			.orderByDescending('elements.published_date')
			.limitParameter(12)
			.toPromise();

		const articles = response.data.items.map((item) => ({
			title: item.elements.title.value,
			slug: item.elements.slug.value,
			summary: item.elements.summary.value,
			image: item.elements.featured_image.value[0]?.url ?? '',
			date: item.elements.published_date.value
		}));

		return { articles };
	} catch {
		return { articles: [] };
	}
};
