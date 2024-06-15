import { posts } from "./data";

// Every page of your app can declare a load function in a +page.server.js file alongside the +page.svelte
// only run on server
// data can be accessed by `export let data` in the page component
export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
    }))
  }
}

// by renaming it +page.server.ts -> +layout.server.ts, all subpages can access the data

