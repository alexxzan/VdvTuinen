import { createDeliveryClient } from '@kontent-ai/delivery-sdk';
import { env } from '$env/dynamic/public';

export function getDeliveryClient() {
	const environmentId = env.PUBLIC_KONTENT_ENVIRONMENT_ID;

	if (!environmentId) {
		throw new Error('PUBLIC_KONTENT_ENVIRONMENT_ID is not configured');
	}

	return createDeliveryClient({
		environmentId
	});
}
