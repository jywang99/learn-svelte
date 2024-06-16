<script lang="ts">
  import {enhance} from '$app/forms';

  export let form: { color?: string; error?: string };
</script>

<style>
  .error {
    color: red;
  }
</style>

<h1>Colors</h1>
<form method="POST" use:enhance>
  <label for="color">Enter a color in hex:</label>
  <input type="text" name="color" on:change={() => {
    if (form?.error) {
      form.error = undefined
    }
  }}/>
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
</form>

