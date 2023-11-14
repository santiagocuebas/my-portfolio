export interface IMail {
	subject: string,
	to: string,
	text: string
}

export interface IFormDataEntries {
	[index: string]: FormDataEntryValue;
}
