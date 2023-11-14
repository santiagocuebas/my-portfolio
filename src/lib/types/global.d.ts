type Tech = { icon: string, name: string };

type ResponseData = 'success' | 'warn' | 'error';

interface IVersion {
	techs: Tech[];
	deploy: string;
	github: string;
}

export interface IProject {
	id: number;
	image: string;
	name: string;
	description: string;
	version: IVersion[];
}

export interface IDictionary {
	success: string;
	warn: string;
	error: string;
}
