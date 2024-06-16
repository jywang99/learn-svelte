import { fail, redirect, type Actions } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';

export const actions: Actions = {
	default: async ({ cookies, url, request }) => {
    const formData = await request.formData();
    const passphrase = formData.get('passphrase');
    if (passphrase !== PASSPHRASE) {
      return fail(401, {
        error: 'Incorrect passphrase'
      });
    }
		cookies.set('logged_in', 'true', { path: '/', httpOnly: false });
		throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
	}
};

