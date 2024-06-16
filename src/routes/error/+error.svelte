<script lang="ts">
  import { page } from '$app/stores';
  import { emojis } from './emojis'
  import type { EmojiKeys } from './emojis'

  const ekey = $page.status as EmojiKeys
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em">
  {emojis[ekey] ?? emojis[500]}
</span>

