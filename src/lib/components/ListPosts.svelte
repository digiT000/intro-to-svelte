<script>
	const { posts } = $props();
</script>

{#each posts as post (post.id)}
	<div>
		<h5>{post.title}</h5>
		<p>{post.body}</p>
		<hr />
	</div>
{/each}
