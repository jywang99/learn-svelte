import { fail, redirect, type Actions } from "@sveltejs/kit";
import { match } from "../../params/hex";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    if (!match(data.get('color') as string)) {
      return fail(422, {
        color: data.get('description'),
        error: 'Invalid color',
      });
    }
    return redirect(300, `/color/${data.get('color')}`);
  },
}

