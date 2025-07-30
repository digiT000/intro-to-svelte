<script lang="ts">
	import { onMount } from 'svelte';
	import { getPosts } from '../utils/getPosts';
	import { userData } from '$lib/state/user.svelte';
	import ListPost from '$lib/components/ListPosts.svelte';
	// Dummy Storage for Posts
	const posts: { id: number; title: string; body: string }[] = $state([]);
	let isLoading: boolean = $state(true);

	const user = $state({
		name: 'Farel',
		followers: 10,
		isFollowByYou: false
	});

	function handleAddNewFollower() {
		user.followers += 1;
		user.isFollowByYou = true;
	}

	function handleRemoveFollower() {
		user.followers -= 1;
		user.isFollowByYou = false;
	}

	const newPostData = $state({
		title: '',
		body: ''
	});

	function handleAddNewPost(e: any) {
		e.preventDefault();
		if (!newPostData.title || !newPostData.body) {
			alert('Please fill in all fields');
			return;
		}
		posts.push({
			id: posts.length + 1,
			title: newPostData.title,
			body: newPostData.body
		});
		newPostData.title = '';
		newPostData.body = '';
	}
	$inspect(posts, 'posts');

	// FETCHING DATA FROM API WHEN ONMOUNT
	onMount(async () => {
		isLoading = true;
		const result = await getPosts();
		if (result) {
			posts.push(...result);
		} else {
			alert('Failed to fetch posts');
		}
		isLoading = false;
	});
</script>

<section>
	<h1>Welcome {user.name}</h1>
	<button onclick={user.isFollowByYou ? handleRemoveFollower : handleAddNewFollower}
		>{user.isFollowByYou ? 'Unfollow' : 'Follow'}</button
	>

	<p>Followers: {user.followers}</p>
</section>
<section>
	<h2>Create New Post</h2>

	{#if userData.loadingUser}
		<p>Checking user...</p>
	{:else if userData.id !== 0}
		<form onsubmit={handleAddNewPost}>
			<input name="title" type="text" placeholder="Title" bind:value={newPostData.title} />
			<input name="body" type="text" placeholder="description" bind:value={newPostData.body} />
			<button type="submit">Create Post</button>
		</form>
	{:else}
		<p>Please log in to create a post.</p>
	{/if}

	<h3>Posts</h3>
	{#if isLoading}
		<p>Loading posts...</p>
	{:else if posts.length === 0}
		<p>No posts available.</p>
	{/if}

	<ListPost {posts} />
</section>
