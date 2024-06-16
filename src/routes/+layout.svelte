<script>
  import { page, navigating } from '$app/stores';

  const pages = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/blog', text: 'Blog' },
    { url: '/todo', text: 'TODO' },
    { url: '/error', text: 'ERROR' },
    { url: '/redirect', text: 'Redirect' },
  ];
</script>

<!-- Applied to all sibling and descendant (in child directories) components -->
<nav>
	{#each pages as pg}
    <a href="{pg.url}" aria-current={$page.url.pathname === pg.url}>{pg.text}</a>
  {/each}

  {#if $navigating}
    navigating to {$navigating.to?.url.pathname}...
  {/if}
</nav>

<!-- Where the content is rendered -->
<slot />

