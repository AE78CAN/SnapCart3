// A simple array of product objects. This is our "database" for now.
const products = [
    {
        name: "Organic Penne Pasta",
        price: "$3.49",
        store: "Amazon",
        image: "https://via.placeholder.com/150?text=Pasta",
        affiliateLink: "https://www.amazon.com/demo-pasta-link" // You'll replace this with a real affiliate link later
    },
    {
        name: "Whole Milk (1 Gallon)",
        price: "$2.99",
        store: "Walmart",
        image: "https://via.placeholder.com/150?text=Milk",
        affiliateLink: "https://www.walmart.com/demo-milk-link"
    },
    {
        name: "Ibuprofen Tablets (200mg)",
        price: "$5.99",
        store: "CVS",
        image: "https://via.placeholder.com/150?text=Medicine",
        affiliateLink: "https://www.cvs.com/demo-medicine-link"
    },
    {
        name: "Premium Coffee Beans",
        price: "$12.99",
        store: "Thrive Market",
        image: "https://via.placeholder.com/150?text=Coffee",
        affiliateLink: "https://www.thrivemarket.com/demo-coffee-link"
    },
    {
        name: "Paper Towels (12 Rolls)",
        price: "$18.99",
        store: "Target",
        image: "https://via.placeholder.com/150?text=Paper+Towels",
        affiliateLink: "https://www.target.com/demo-papertowels-link"
    }
];

// This function runs when the page loads to display all products.
function displayProducts(productsArray) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ''; // Clear the current list

    productsArray.forEach(product => {
        // Create HTML for each product card
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Store:</strong> ${product.store}</p>
                <a href="${product.affiliateLink}" target="_blank" class="buy-button">Buy Now</a>
            </div>
        `;
        // Add the card to the list
        productListElement.innerHTML += productCard;
    });
}

// This function runs when the search button is clicked.
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // Filter the products array based on the search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.store.toLowerCase().includes(searchTerm)
    );
    // Display the filtered list
    displayProducts(filteredProducts);
}

// Display all products when the page first loads
document.addEventListener('DOMContentLoaded', () => displayProducts(products));
