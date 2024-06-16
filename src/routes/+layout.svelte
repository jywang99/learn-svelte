<script lang="ts">
  import { navigating } from '$app/stores';
    import { onMount } from 'svelte';
  import NavLink from './NavLink.svelte';
  import { isCookieSet, type LinkType } from './util';

  const pages: LinkType[] = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/blog', text: 'Blog' },
    { url: '/todo', text: 'TODO' },
    { url: '/error', text: 'ERROR' },
    { url: '/redirect', text: 'Redirect' },
    { url: '/hooks', text: 'Hooks' },
    { url: '/fatal', text: 'Fatal' },
    { url: '/color', text: 'Colors', sublinks: [
      { url: '/ff3e00', text: '#ff3e00' },
      { url: '/676779', text: '#676779' },
      { url: '/42b4ff', text: '#42b4ff' },
    ]},
  ];

  // conditional rendering of account link
  const account: LinkType = { url: "account", text: "Account" };
  const sl: LinkType[] = [];
  if (isCookieSet('logged_in')) {
    sl.push({ url: "/logout", text: "Logout" });
  } else {
    sl.push({ url: "/login", text: "Login" });
  }
  account.sublinks = sl;
  pages.push(account);
</script>

<style>
  nav {
    position: relative;
    display: flex;
    gap: 1em;
    padding: 1em;
    background: var(--bg-2);
    z-index: 2;
    margin: 0 0 1em 0;
    border-radius: var(--border-radius);
  }
</style>

<!-- Applied to all sibling and descendant (in child directories) components -->
<nav>
  {#each pages as pg}
    <NavLink link={pg} />
  {/each}

  {#if $navigating}
    navigating to {$navigating.to?.url.pathname}...
  {/if}
</nav>

<!-- Where the content is rendered -->
<slot />

