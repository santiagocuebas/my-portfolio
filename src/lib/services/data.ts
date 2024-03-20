import type { IProject } from "$lib/types/global";
import * as image from '../assets/images';
import * as icon from '../assets/icons';

const githubUser = 'https://github.com/santiagocuebas/';

const deployDir = (dir: string) => 'https://' + dir + '.netlify.app';

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
		name: 'Advanced Chat App',
		description: 'Web application to send chats and photos, with the possibility of creating groups and manage it',
		version: [
			{
				techs: [typeScript, svelteKit, tailwind, express, socket, mongodb],
				deploy: deployDir('svchat-xcrv2f'),
				github: githubUser + 'sveltekit-advanced-chat-app'
			}
		]
	},
	{
		id: 2,
		image: image.imgShare,
		name: 'imgShare App',
		description: 'Web application to share images, rate them, comment, add to favorites, etc',
		version: [
			{
				techs: [typeScript, svelteKit, tailwind, express, nodemailer, cockroach],
				deploy: deployDir('imgshare-4c7df3'),
				github: githubUser + 'sveltekit-imgshare-app'
			}
		]
	}
];

export const projects: IProject[] = [
	{
		id: 1,
		image: image.astro,
		name: 'Spotify Clon',
		description: 'Simple web mirror of spotify with Transitions API',
		version: [
			{
				techs: [typeScript, astro, svelte, tailwind],
				deploy: deployDir('astro-spotify-1ac0a7'),
				github: githubUser + 'astro-spotify'
			}
		]
	},
	{
		id: 2,
		image: image.chat,
		name: 'Simple Chat App',
		description: 'Simple web application for chatting',
		version: [
			{
				techs: [typeScript, svelteKit, express, socket, mongodb],
				deploy: '',
				github: githubUser + 'sveltekit-chat-app'
			}
		]
	},
	{
		id: 3,
		image: image.links,
		name: 'Links App',
		description: 'Wen application to create, modify and delete links',
		version: [
			{
				techs: [typeScript, svelteKit, express, mysql],
				deploy: '',
				github: githubUser + 'sveltekit-task-app'
			},
			{
				techs: [typeScript, nextjs, express, mysql],
				deploy: '',
				github: githubUser + 'task-nextjs-app'
			},
		]
	},
	{
		id: 4,
		image: image.images,
		name: 'Images App',
		description: 'Web application to share images, rate them and comment',
		version: [
			{
				techs: [typeScript, svelteKit, express, mongodb],
				deploy: '',
				github: githubUser + 'sveltekit-images-app'
			},
			{
				techs: [typeScript, nextjs, express, mongodb],
				deploy: '',
				github: githubUser + 'images-nextjs-app'
			}
		]
	},
	{
		id: 5,
		image: image.task,
		name: 'Task App',
		description: 'Simple webpage to create, modify and delete tasks',
		version: [
			{
				techs: [typeScript, svelte, express],
				deploy: '',
				github: githubUser + 'task-svelte-app'
			}
		]
	},
	{
		id: 6,
		image: image.calculator,
		name: 'Calculator App',
		description: 'Simple calculator',
		version: [
			{
				techs: [typeScript, svelte, express],
				deploy: '',
				github: githubUser + 'calculator-svelte-app'
			}
		]
	}
];
