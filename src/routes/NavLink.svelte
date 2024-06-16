<script lang="ts">
  import { page } from '$app/stores';
  import SubLinks from './SubLinks.svelte';
  import type { LinkType } from "./types";

  export let link: LinkType;

  let hovered = false;
</script>

<style>
  a {
      text-decoration: none;
  }

  a[aria-current='true'] {
      border-bottom: 2px solid;
  }
</style>

<div on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false} role="link" tabindex="0">
  <a href="{link.url}" aria-current={$page.url.pathname === link.url}>{link.text}</a>
  {#if link.sublinks && hovered}
    <SubLinks baseLink={link.url} links={link.sublinks} />
  {/if}
</div>

