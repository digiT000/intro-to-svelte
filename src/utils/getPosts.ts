export async function getPosts(): Promise<{ id: number; title: string; body: string }[]> {
	const respose = await fetch('https://dummyjson.com/posts');
	const result = await respose.json();
	if (result.posts.length === 0) {
		return [];
	}
	return result.posts;
}
