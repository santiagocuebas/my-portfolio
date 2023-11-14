export const isValidFormData = (field: FormDataEntryValue, length: number) => {
	return typeof field === 'string' &&
		field.length > 0 &&
		field.length <= length;
};

export const isValidEmail = (field: FormDataEntryValue) => {
	const parchedField = String(field);
	return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(parchedField);
};
