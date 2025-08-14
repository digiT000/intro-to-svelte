<script lang="ts">
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
</script>

<section>
	<h1>Welcome {user.name}</h1>
	<button onclick={user.isFollowByYou ? handleRemoveFollower : handleAddNewFollower}
		>{user.isFollowByYou ? 'Unfollow' : 'Follow'}</button
	>

	<p>Followers: {user.followers}</p>
</section>
