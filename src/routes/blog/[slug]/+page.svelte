<script lang="ts">
  import { message } from '$lib/message';
  import type { PostType } from '$lib/types';

  export let data: { post: PostType };
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<br />
<div style="opacity:0.5">{message}</div>

