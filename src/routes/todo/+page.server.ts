import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import type { Actions, ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ cookies }) => {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions: Actions = {
  create: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    const data = await request.formData();
    try {
      db.createTodo(cookies.get('userid') as string, data.get('description') as string);
    } catch (error: any) {
      return fail(422, {
        description: data.get('description'),
        error: error.message,
      });
    }
  },

  delete: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    const data = await request.formData();
    const userId = cookies.get('userid');
    const id = data.get('id');
    if (!userId || !id) {
      return {
        status: 400,
        body: 'Bad Request'
      };
    }
    db.deleteTodo(userId, id.toString());
  }
}

