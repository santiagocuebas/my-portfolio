import nodemailer from 'nodemailer';
import { USERNAME, ACCESS, TOKEN, CLIENTID, SECRET } from '$lib/server/config';

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
  port: 465,
  secure: true,
	auth: {
		type: 'OAuth2',
		user: USERNAME,
		clientId: CLIENTID,
		clientSecret: SECRET,
		accessToken: ACCESS,
		refreshToken: TOKEN
	}
});
