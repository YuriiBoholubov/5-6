//створення карток
fetch('resources/products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('productContainer');

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <h3>PC</h3>
                <p><strong>CPU:</strong> ${product.cpu}</p>
                <p><strong>GPU:</strong> ${product.gpu}</p>
                <p><strong>RAM:</strong> ${product.ram}</p>
                <p class="price">$${product.price}</p>
                <button>Add to cart</button>
            `;
            container.appendChild(card);
        });
    });
