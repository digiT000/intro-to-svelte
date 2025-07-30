<script>
	import { RenderScan } from 'svelte-render-scan';
	import NavigationBar from '$lib/components/navigationBar.svelte';
	import { userData } from '$lib/state/user.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		// This is a good place to initialize or fetch user data
		if (userData.id === 0) {
			fetch('https://dummyjson.com/users/1').then((res) =>
				res.json().then((data) => {
					console.log(data);
					userData.updateUserData(data);
				})
			);
		}
	});

	let { children } = $props();
</script>

<RenderScan />

<NavigationBar />
{@render children()}

<style>
	:global(body) {
		/* applies to <body> */
		margin: 0;
		padding: 0;
	}
	:global(.button-primary) {
		padding: 4px 16px;
		height: 40px;
		border-radius: 8px;
		background-color: bisque;
		color: #121212;
		font-weight: 600;
		width: fit-content;
		border: none;
		cursor: pointer;
	}
</style>
