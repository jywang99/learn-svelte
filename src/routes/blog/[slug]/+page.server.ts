import { error } from '@sveltejs/kit';
import { posts } from '../data';
import type { Load } from '@sveltejs/kit';

export const load: Load = ({ params }) => {
  const post = posts.find(post => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}
