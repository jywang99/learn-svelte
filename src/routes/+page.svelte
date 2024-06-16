<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let number: number|string = "(None)";

  async function roll() {
    const response = await fetch('/roll');
    number = await response.json();
  }
</script>

<h1>Welcome, {data.visited ? "friend" : "stranger"}!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Random number: {number}</p>
<button on:click={roll}>Roll</button>

