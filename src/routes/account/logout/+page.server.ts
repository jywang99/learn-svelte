import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: ({ cookies, url }) => {
    cookies.delete('logged_in', { path: '/' });
		throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
	}
};

