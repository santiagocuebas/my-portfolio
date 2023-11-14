import type { IProject } from "$lib/types/global";

const githubUser = 'https://github.com/santiagocuebas/';

const typeScript = { name: 'TypeScript', icon: '/icons/ts.png' };
const svelteKit = { name: 'SvelteKit', icon: '/icons/svelte.png' };
const svelte = { name: 'Svelte', icon: '/icons/svelte.png' };
const nextjs = { name: 'Next.js', icon: '/icons/next.png' };
const tailwind = { name: 'Tailwind.css', icon: '/icons/tcss.png' };
const express = { name: 'Express', icon: '/icons/expressjs.png' };
const socket = { name: 'Socket.io', icon: '/icons/socketio.png' };
const mysql = { name: 'MySQL', icon: '/icons/mysql.png' };
const mongodb = { name: 'MongoDB', icon: '/icons/mongodb.png' };

export const mainProjects: IProject[] = [
	{
		id: 1,
		image: '/advanced-chat.webp',
		name: 'Advanced Chat App',
		description: 'Web application to send chats and photos, with the possibility of creating groups and manage it',
		version: [
			{
				techs: [typeScript, svelteKit, tailwind, express, socket, mongodb],
				deploy: '',
				github: githubUser + 'sveltekit-advanced-chat-app'
			}
		]
	},
	{
		id: 2,
		image: '/imgshare.webp',
		name: 'imgShare App',
		description: 'Web application to share images, rate them, comment, add to favorites, etc',
		version: [
			{
				techs: [typeScript, svelteKit, express, mysql, mongodb],
				deploy: '',
				github: githubUser + 'sveltekit-imgshare-app'
			}
		]
	}
];

export const projects: IProject[] = [
	{
		id: 1,
		image: '/chat.webp',
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
		id: 2,
		image: '/links.webp',
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
		id: 3,
		image: '/images.webp',
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
		id: 4,
		image: '/task.webp',
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
		id: 5,
		image: '/calculator.webp',
		name: 'Calculator App',
		description: 'Simple calculator',
		version: [
			{
				techs: [typeScript, svelte, express],
				deploy: '',
				github: githubUser + 'calculator-svelte-app'
			}
		]
	},
	{
		id: 6,
		image: '/count.webp',
		name: 'Count App',
		description: 'Simple count webpage',
		version: [
			{
				techs: [typeScript, svelte, express],
				deploy: '',
				github: githubUser + 'count-svelte-app'
			}
		]
	},
	{
		id: 7,
		image: '/testimony.webp',
		name: 'Simple Page App',
		description: 'First pageweb with Svelte',
		version: [
			{
				techs: [typeScript, svelte, express],
				deploy: '',
				github: githubUser + 'first-svelte-app'
			}
		]
	}
];
