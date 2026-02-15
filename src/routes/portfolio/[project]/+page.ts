import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/content';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.project);

	if (!project) {
		error(404, 'Project niet gevonden');
	}

	const otherProjects = projects.filter((p) => p.slug !== params.project);

	return { project, otherProjects };
};
