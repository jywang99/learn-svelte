<script lang="ts">
    import { slide } from "svelte/transition";
  import type { LinkType } from "./types";

  export let baseLink: string;
  export let links: LinkType[];
</script>

<style>
  ul {
    padding: 1em;
    background: var(--bg-2);
    margin: 0 0 1em 0;
    border-radius: var(--border-radius);
    position: absolute;
  }

  li {
    list-style: none;
  }

  li:not(:first-child) {
    margin-top: 0.5em;
    padding-top: 0.5em;
    border-top: 1px solid var(--bg-3);
  }

  li a {
    text-decoration: none;
  }
</style>

<ul transition:slide>
  {#each links as { url, text }}
    <li>
      <a href={baseLink + url}>{text}</a>
    </li>
  {/each}
</ul>

