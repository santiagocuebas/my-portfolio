import type { IDictionary } from "$lib/types/global";

export const FormMessage: IDictionary = {
  success: 'The message has been sent and received successfully',
  warn: 'An error has occurred when sending the message. Please check if the email address is correct',
  error: 'The value of one or more of the fields is incorrect. Please change them and try again'
};
