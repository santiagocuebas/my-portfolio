import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { transporter } from '$lib/server/mailer';
import { verifyFormData } from '$lib/server/verify-data';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const formData = Object.fromEntries(data.entries());
	const mail = verifyFormData(formData);

	if (mail === undefined) return json('error', { status: 401 });

	const info = await transporter
		.sendMail(mail)
		.then(data => {
			console.log(data.messageId);
			return 'success';
		})
		.catch(err => {
			console.error(err);
			return 'warn';
		});

	return json(info);
};