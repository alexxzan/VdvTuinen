import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('firstName')?.toString().trim() ?? '';
		const lastName = data.get('lastName')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const phone = data.get('phone')?.toString().trim() ?? '';
		const service = data.get('service')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		const errors: Record<string, string> = {};

		if (firstName.length < 2) {
			errors.firstName = 'Vul een geldige voornaam in (minimaal 2 tekens).';
		}

		if (lastName.length < 2) {
			errors.lastName = 'Vul een geldige achternaam in (minimaal 2 tekens).';
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errors.email = 'Vul een geldig e-mailadres in.';
		}

		if (message.length < 10) {
			errors.message = 'Uw bericht moet minimaal 10 tekens bevatten.';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { firstName, lastName, email, phone, service, message } });
		}

		// TODO: Integrate email sending (e.g., Resend, Nodemailer)
		console.log('Contact form submission:', { firstName, lastName, email, phone, service, message });

		return { success: true };
	}
} satisfies Actions;
