import { env } from '$env/dynamic/private';

export const USERNAME = env.MAIL_USERNAME as string;

export const CLIENTID = env.OAUTH_CLIENTID as string;

export const SECRET = env.OAUTH_CLIENT_SECRET as string;

export const TOKEN = env.OAUTH_REFRESH_TOKEN as string;

export const ACCESS = env.OAUTH_ACCESS_TOKEN as string;

export const NAME = env.NAME as string;
