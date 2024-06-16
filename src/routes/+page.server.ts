import type { ServerLoad } from '@sveltejs/kit';

export type PageData = {
  visited: boolean;
};

// loaded on server side, so use ServerLoad type
export const load: ServerLoad = ({ cookies }) => {
  const visited = cookies.get('logged_in');
  return {
    visited: visited === 'true'
  };
};

