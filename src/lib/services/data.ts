import type { IProject, Tech } from "$lib/types/global";
import * as image from '../assets/images';
import * as icon from '../assets/icons';

const wrapLink = (text: string) => `<a class="font-medium text-[#5383d3] hover:text-[#a837ac]" href="https://github.com/fazt/nodejs-imgshare" target="_blank">${text}</a>`;

const getVersion = (techs: Tech[], dir: string, link: string) => {
	return {
		techs,
		deploy: dir ? 'https://' + dir + '.netlify.app' : dir,
		github: 'https://github.com/santiagocuebas/' + link
	}
};

const typeScript = { name: 'TypeScript', icon: icon.ts };
const svelteKit = { name: 'SvelteKit', icon: icon.svelte };
const svelte = { name: 'Svelte', icon: icon.svelte };
const nextjs = { name: 'Next.js', icon: icon.next };
const astro = { name: 'Astro', icon: icon.astro };
const tailwind = { name: 'Tailwind.css', icon: icon.tcss };
const express = { name: 'Express', icon: icon.expressjs };
const nodemailer = { name: 'Nodemailer', icon: icon.nodemailer };
const socket = { name: 'Socket.io', icon: icon.socketio };
const mysql = { name: 'MySQL', icon: icon.mysql };
const cockroach = { name: 'CockroachDB', icon: icon.cockroachdb };
const mongodb = { name: 'MongoDB', icon: icon.mongodb };

export const mainProjects: IProject[] = [
	{
		id: 1,
		image: image.svChat,
		name: 'SvChat App',
		description: 'Aplicación web de mensajería, basada vagamente en WhatsApp. Permite enviar mensajes, fotos, audios y videos; asi como crear grupos. Creado con SvelteKit, Express, TypeScript y Socket.io.',
		version: [
			getVersion([typeScript, svelteKit, tailwind, express, socket, mongodb],
				'svchat-xcrv2f', 'sveltekit-advanced-chat-app')
		]
	},
	{
		id: 2,
		image: image.imgShare,
		name: 'imgShare App',
		description: `Aplicación web de colección de imagenes, basado en ${wrapLink('este')} projecto de Fazt. Permite compartir imagenes, valorarlas, comentarlas, añadir a favoritos, etc; utilizando SvelteKit, Express y TypeScript.`,
		version: [
			getVersion([typeScript, svelteKit, tailwind, express, nodemailer, cockroach],
				'imgshare-4c7df3', 'sveltekit-imgshare-app')
		]
	}
];

export const projects: IProject[] = [
	{
		id: 1,
		image: image.astro,
		name: 'Clon de Spotify',
		description: `Simple web mirror de spotify utilizando Transitions API y Astro, basado en ${wrapLink('este')} proyecto de Miguel Ángel Durán (alias midudev).`,
		version: [
			getVersion([typeScript, astro, svelte, tailwind], 'astro-spotify-1ac0a7',
				'astro-spotify')
		]
	},
	{
		id: 2,
		image: image.chat,
		name: 'Simple Aplicación Chat',
		description: 'Simple aplicación web para chatear.',
		version: [
			getVersion([typeScript, svelteKit, express, socket, mongodb], '',
				'sveltekit-chat-app')
		]
	},
	{
		id: 3,
		image: image.links,
		name: 'Aplicación de Links',
		description: `Aplicación web para crear, modificar y borrar links; basado en el siguiente proyecto de Fazt: ${wrapLink('Links App con Nodejs')}.`,
		version: [
			getVersion([typeScript, svelteKit, express, mysql], '', 'sveltekit-task-app'),
			getVersion([typeScript, nextjs, express, mysql], '', 'task-nextjs-app')
		]
	},
	{
		id: 4,
		image: image.images,
		name: 'Aplicación de Imágenes',
		description: `Aplicación web para compartir imágenes, calificarlas y comentarlas; basado en el siguiente proyecto de Fazt: ${wrapLink('imgShare')}.`,
		version: [
			getVersion([typeScript, svelteKit, express, mongodb], '',
				'sveltekit-images-app'),
			getVersion([typeScript, nextjs, express, mongodb], '', 'images-nextjs-app')
		]
	},
	{
		id: 5,
		image: image.task,
		name: 'App de Tareas',
		description: 'Simple página web para crear, modificar y borrar tareas',
		version: [
			getVersion([typeScript, svelte, express], '', 'task-svelte-app')
		]
	},
	{
		id: 6,
		image: image.calculator,
		name: 'App Calculadora',
		description: 'Simple calculadora',
		version: [
			getVersion([typeScript, svelte, express], '', 'calculator-svelte-app')
		]
	}
];
