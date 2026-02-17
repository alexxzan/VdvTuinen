import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	const { pathname } = event.url;

	if (pathname.startsWith('/images/') || pathname.endsWith('.png')) {
		response.headers.set('cache-control', 'public, max-age=2592000, immutable');
	}

	return response;
};
