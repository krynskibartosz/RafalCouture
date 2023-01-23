
<script>
	const fetchProducts = (async () => {
    const response = await fetch('http://localhost:3000/shopping-items')
    return await response.json()
	})()
	async function addProduct() {
    const product = { name: 'Bijoux', price: 30 }; // Add the product data here
    const response = await fetch('http://localhost:3000/shopping-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
	
    const result = await response.json();
  }	
</script>

<h1>Web</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="productList">
	<h2>Product List</h2>
	<button on:click={addProduct}>Add product</button>
	{#await fetchProducts}
	<p>Loading…</p>
	{:then data}
		<ul>
			{#each data as product}
			<li>{product.name} - {product.price}</li>
			{/each}
		</ul>
    {/await}
</div>


