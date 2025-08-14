<script lang="ts">
	import ProductList from '$lib/components/page/cart/ProductList.svelte';
</script>

<main class="main-cart-container">
	<section class="cart-container">
		<div class="product-section">
			<h1>Desserts</h1>
			<!-- PRODUCT LIST -->
			<ProductList></ProductList>
		</div>
		<div class="cart-section"></div>
	</section>
</main>

<style>
	.main-cart-container {
		padding: 24px 16px;
	}
	.cart-container {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		gap: 40px;
	}
	.product-section {
		width: 70%;
	}
	.cart-section {
		width: 30%;
		background-color: red;
	}
</style>
