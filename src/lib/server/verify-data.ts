import type { IFormDataEntries, IMail } from './types';
import { isValidEmail, isValidFormData } from './check-field';
import { USERNAME, NAME } from './config';

export const verifyFormData = ({ name, email, message }: IFormDataEntries) => {
	if (
		isValidFormData(name, 40) &&
		isValidFormData(message, 240) &&
		isValidFormData(email, 255) &&
		isValidEmail(email)
	) {
		const mail: IMail = {
			subject: `Un mensaje de ${name} <${email}>`,
			to: `"${NAME}" <${USERNAME}>`,
			text: `${message}`
		};

		return mail;
}

	return undefined;
};
