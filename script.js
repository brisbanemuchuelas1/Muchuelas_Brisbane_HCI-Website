const menuItems = [
  {
    id: 1,
    name: 'Smoky BBQ Burger',
    category: 'Burgers',
    price: 199,
    rating: 4.8,
    description: 'Grilled beef patty, smoky BBQ sauce, cheddar, onion rings, and lettuce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Truffle Mushroom Melt',
    category: 'Burgers',
    price: 219,
    rating: 4.7,
    description: 'Juicy chicken burger with truffle aioli, mushrooms, and provolone.',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    badge: 'Chef Pick'
  },
  {
    id: 3,
    name: 'Firecracker Pizza',
    category: 'Pizza',
    price: 289,
    rating: 4.9,
    description: 'Spicy tomato sauce, mozzarella, pepperoni, jalapeños, and basil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    badge: 'Hot'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    category: 'Salads',
    price: 165,
    rating: 4.6,
    description: 'Fresh romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    badge: 'Fresh'
  },
  {
    id: 5,
    name: 'Creamy Alfredo Pasta',
    category: 'Pasta',
    price: 239,
    rating: 4.8,
    description: 'Fettuccine tossed in creamy parmesan sauce with spinach and garlic.',
    image: './alfredo-5.png',
    badge: 'Comfort'
  },
  {
    id: 6,
    name: 'Penne Pasta',
    category: 'Pasta',
    price: 199,
    rating: 4.7,
    description: 'Penne pasta tossed in a rich tomato sauce with garlic, basil, and parmesan.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular'
  },
  {
    id: 7,
    name: 'Citrus Cooler',
    category: 'Drinks',
    price: 79,
    rating: 4.5,
    description: 'Refreshing lemonade with orange slices, mint, and sparkling water.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    badge: 'Fresh'
  },
  {
    id: 8,
    name: 'Berry Burst Shake',
    category: 'Drinks',
    price: 99,
    rating: 4.9,
    description: 'Creamy mixed berry shake topped with whipped cream and granola.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    badge: 'New'
  },
  {
    id: 9,
    name: 'Molten Chocolate Cake',
    category: 'Desserts',
    price: 129,
    rating: 4.9,
    description: 'Warm chocolate cake with a silky center and vanilla bean cream.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    badge: 'Sweet'
  },
  {
    id: 10,
    name: 'Strawberry Cheesecake',
    category: 'Desserts',
    price: 139,
    rating: 4.8,
    description: 'Light cheesecake layered with fresh strawberry compote and crumbs.',
    image: './strawberry-cheesecake.jpg',
    badge: 'Classic'
  },
  {
    id: 11,
    name: 'Shawarma',
    category: 'Wraps',
    price: 169,
    rating: 4.6,
    description: 'Seasoned marinated meat, fresh vegetables, and tahini sauce wrapped in pita bread.',
    image: './Beef-Shawarma-Recipe-768x768.webp',
    badge: 'Grab & Go'
  },
  {
    id: 12,
    name: 'Loaded Fries',
    category: 'Sides',
    price: 119,
    rating: 4.5,
    description: 'Golden fries topped with cheese sauce, herbs, and roasted garlic.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    badge: 'Add On'
  }
];

const state = {
  selectedCategory: 'All',
  searchTerm: '',
  cart: []
};

const categoryButtons = document.querySelectorAll('.category-button');
const searchInput = document.getElementById('menuSearch');
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalValue = document.getElementById('subtotalValue');
const deliveryValue = document.getElementById('deliveryValue');
const totalValue = document.getElementById('totalValue');
const checkoutForm = document.getElementById('checkoutForm');
const successMessage = document.getElementById('successMessage');
const cartButton = document.querySelector('.cart-button');
const cartPanel = document.querySelector('.cart-panel');

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(amount);
}

function getFilteredItems() {
  return menuItems.filter((item) => {
    const matchesCategory = state.selectedCategory === 'All' || item.category === state.selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(state.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderMenu() {
  const filteredItems = getFilteredItems();

  if (!filteredItems.length) {
    menuGrid.innerHTML = `
      <div class="empty-results">
        <h3>No dishes match your search.</h3>
        <p>Try a different keyword or choose another category.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="food-card" aria-label="${item.name}">
          <div class="food-image-wrap">
            <img src="${item.image}" alt="${item.name}" />
            <span class="food-badge">${item.badge}</span>
          </div>
          <div class="food-card-content">
            <div class="food-header-row">
              <h3>${item.name}</h3>
              <span class="rating">★ ${item.rating}</span>
            </div>
            <p>${item.description}</p>
            <div class="food-footer-row">
              <strong>${formatCurrency(item.price)}</strong>
              <button class="primary-btn add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function addToCart(itemId) {
  const item = menuItems.find((food) => food.id === itemId);
  if (!item) return;

  const existingItem = state.cart.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }

  updateCart();
}

function updateQuantity(itemId, change) {
  const item = state.cart.find((cartItem) => cartItem.id === itemId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
  }

  updateCart();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  updateCart();
}

function getCartTotals() {
  const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 49 : 0;
  const total = subtotal + delivery;

  return { subtotal, delivery, total };
}

function updateCart() {
  const cartTotalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = cartTotalItems;

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <span>Add some delicious items to begin.</span>
      </div>
    `;
    subtotalValue.textContent = formatCurrency(0);
    deliveryValue.textContent = formatCurrency(0);
    totalValue.textContent = formatCurrency(0);
    return;
  }

  const totals = getCartTotals();

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item" aria-label="${item.name} in cart">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>${formatCurrency(item.price)} each</p>
          </div>
          <div class="cart-controls">
            <div class="quantity-box">
              <button class="qty-btn" data-id="${item.id}" data-action="decrease" aria-label="Decrease quantity for ${item.name}">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" data-id="${item.id}" data-action="increase" aria-label="Increase quantity for ${item.name}">+</button>
            </div>
            <button class="remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">Remove</button>
          </div>
        </div>
      `
    )
    .join('');

  subtotalValue.textContent = formatCurrency(totals.subtotal);
  deliveryValue.textContent = formatCurrency(totals.delivery);
  totalValue.textContent = formatCurrency(totals.total);
}

cartButton.addEventListener('click', () => {
  cartPanel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.selectedCategory = button.dataset.category;

    categoryButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderMenu();
  });
});

searchInput.addEventListener('input', (event) => {
  state.searchTerm = event.target.value.trim();
  renderMenu();
});

menuGrid.addEventListener('click', (event) => {
  const target = event.target.closest('.add-to-cart');
  if (!target) return;

  const itemId = Number(target.dataset.id);
  addToCart(itemId);
});

cartItems.addEventListener('click', (event) => {
  const target = event.target.closest('.qty-btn');
  if (target) {
    const itemId = Number(target.dataset.id);
    const action = target.dataset.action;
    updateQuantity(itemId, action === 'increase' ? 1 : -1);
    return;
  }

  const removeButton = event.target.closest('.remove-btn');
  if (removeButton) {
    const itemId = Number(removeButton.dataset.id);
    removeFromCart(itemId);
  }
});

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!state.cart.length) {
    alert('Your cart is empty. Add at least one item before checkout.');
    return;
  }

  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked').value;

  if (!name || !phone) {
    alert('Please complete your name and phone number.');
    return;
  }

  // Only require address for delivery
  if (orderType === 'delivery' && !address) {
    alert('Please provide a delivery address.');
    return;
  }

  const totals = getCartTotals();
  
  // Generate order details
  const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  let orderMessage = `Thank you, ${name}! Your order #${orderId} for ${formatCurrency(totals.total)} has been confirmed.\n\n`;
  
  // Order Summary
  let orderSummary = 'Order Summary:\n';
  state.cart.forEach(item => {
    orderSummary += `• ${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}\n`;
  });
  orderSummary += `Total: ${formatCurrency(totals.total)}\n\n`;
  
  if (orderType === 'pickup') {
    const estimatedTime = Math.floor(Math.random() * 15) + 20; // 20-35 minutes
    orderMessage += `Pickup Information:\n📞 Call us at +63 912 345 6789\n⏱️  Estimated Time: ${estimatedTime} minutes\n\n${orderSummary}`;
  } else if (orderType === 'reservation') {
    const reservationNum = 'RES-' + Math.random().toString(36).substr(2, 7).toUpperCase();
    orderMessage += `Reservation Information:\n📞 Confirmation: +63 912 345 6789\n🎟️  Reservation #${reservationNum}\n\n${orderSummary}`;
  } else {
    // Delivery
    const estimatedDelivery = Math.floor(Math.random() * 20) + 15; // 15-35 minutes
    orderMessage += `Delivery Information:\n📞 Contact: +63 912 345 6789\n⏱️  Estimated Delivery: ${estimatedDelivery} minutes\n\n${orderSummary}`;
  }
  
  successMessage.textContent = orderMessage;
  successMessage.style.whiteSpace = 'pre-wrap';
  successMessage.style.textAlign = 'left';
  successMessage.classList.add('show');

  checkoutForm.reset();
  document.querySelector('input[name="orderType"][value="delivery"]').checked = true;
  document.getElementById('contactField').style.display = 'none';
  state.cart = [];
  updateCart();
  renderMenu();
});

renderMenu();
updateCart();

// Show/hide contact field based on order type
document.querySelectorAll('input[name="orderType"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const contactField = document.getElementById('contactField');
    if (e.target.value === 'pickup' || e.target.value === 'reservation') {
      contactField.style.display = 'block';
    } else {
      contactField.style.display = 'none';
    }
  });
});
