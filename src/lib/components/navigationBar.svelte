<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { userData } from '$lib/state/user.svelte';
</script>

<header>
	<section>
		<img src={logo} alt="Logo" />

		{#if userData.loadingUser}
			<h5>loading user...</h5>
		{:else if userData.id !== 0}
			<div>
				<h5>{userData.firstName}</h5>
			</div>
		{:else}
			<button class="button-primary">Contact</button>
		{/if}
	</section>
</header>

<!-- STYlING -->
<style>
	header {
		padding: 16px 0;
		background-color: #f8f7f7;
		color: #121212;
		padding: 1rem;
	}

	header section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1280px;
		margin: 0 auto;
	}

	header img {
		height: 24px;
		width: auto;
	}
</style>
