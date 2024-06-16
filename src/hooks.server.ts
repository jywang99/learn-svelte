import type { Handle, HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}

  // when using event.fetch,
  //  cookies, authorization header maintained
  //  relative requests can be made, directly go to handlers without http
  if (event.url.pathname === '/abc') {
    return await event.fetch('/');
  }
	
	return await resolve(event, {
		// transformPageChunk: ({ html }) => html.replace(
		// 	'<body',
		// 	'<body style="color: hotpink"'
		// )
	});
}

export const handleError: HandleServerError = async ({ event, error }) => {
  console.error((error as Error).message);

	return {
		message: 'everything is fine',
		code: 'JEREMYBEARIMY'
	};
}
