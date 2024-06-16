<script lang="ts">
  import { enhance } from "$app/forms";

  export let form: { passphrase?: string; error?: string };

  let passphrase = "";
</script>

<h1>log in</h1>

<style>
  .error {
    color: red;
  }
</style>

<form method="POST" use:enhance={() => {
  passphrase = "";
}}>
  <label for="passphrase">Enter your passphrase:</label>
  <input type="password" name="passphrase" bind:value={passphrase} />
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
</form>

