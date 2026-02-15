import { error } from '@sveltejs/kit';
import { services } from '$lib/data/content';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const service = services.find((s) => s.slug === params.dienst);

	if (!service) {
		error(404, 'Dienst niet gevonden');
	}

	return { service };
};
