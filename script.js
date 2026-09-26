const products = [
  { id: 1, name: "Banana-prata", category: "Variedades", unit: "1 kg", price: 5.49, oldPrice: 7.99, offer: true, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "Tomate italiano", category: "Verduras e legumes", unit: "1 kg", price: 6.99, oldPrice: 9.49, offer: true, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Laranja pera", category: "Variedades", unit: "1 kg", price: 4.79, oldPrice: 6.29, offer: true, image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Alface crespa", category: "Verduras e legumes", unit: "unidade", price: 2.99, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Peito de frango", category: "Carnes", unit: "1 kg", price: 17.90, oldPrice: 21.90, offer: true, image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Carne moída", category: "Carnes", unit: "500 g", price: 18.49, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=80" },
  { id: 7, name: "Queijo muçarela", category: "Laticínios", unit: "300 g", price: 12.90, oldPrice: 15.50, offer: true, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80" },
  { id: 8, name: "Leite integral", category: "Laticínios", unit: "1 litro", price: 4.59, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80" },
  { id: 9, name: "Arroz branco", category: "Cereais", unit: "5 kg", price: 24.90, oldPrice: 28.90, offer: true, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80" },
  { id: 10, name: "Café torrado", category: "Bebidas", unit: "500 g", price: 16.90, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80" },
  { id: 11, name: "Maçã gala", category: "Variedades", unit: "1 kg", price: 8.49, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80" },
  { id: 12, name: "Iogurte natural", category: "Laticínios", unit: "170 g", price: 3.79, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80" },
  { id: 13, name: "Feijão carioca", category: "Cereais", unit: "1 kg", price: 8.90, oldPrice: 10.90, offer: true, image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=700&q=80" },
  { id: 14, name: "Aveia em flocos", category: "Cereais", unit: "500 g", price: 6.49, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=80" },
  { id: 15, name: "Biscoito amanteigado", category: "Biscoitos", unit: "300 g", price: 7.49, oldPrice: 8.99, offer: true, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80" },
  { id: 16, name: "Biscoito cream cracker", category: "Biscoitos", unit: "350 g", price: 5.29, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80" },
  { id: 17, name: "Batata inglesa", category: "Verduras e legumes", unit: "1 kg", price: 5.99, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80" },
  { id: 18, name: "Cenoura", category: "Verduras e legumes", unit: "1 kg", price: 4.49, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=700&q=80" },
  { id: 19, name: "Suco de laranja", category: "Bebidas", unit: "1 litro", price: 8.90, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80" },
  { id: 20, name: "Água mineral", category: "Bebidas", unit: "1,5 litro", price: 2.99, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80" },
  { id: 21, name: "Patinho em bifes", category: "Carnes", unit: "500 g", price: 22.90, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=80" },
  { id: 22, name: "Refrigerante cola", category: "Bebidas", unit: "2 litros", price: 9.99, oldPrice: 11.49, offer: true, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=700&q=80" },
  { id: 23, name: "Cerveja pilsen", category: "Bebidas", unit: "350 ml", price: 3.49, oldPrice: null, offer: false, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80" }
];

const categoryOrder = ["Laticínios", "Carnes", "Cereais", "Biscoitos", "Variedades", "Verduras e legumes", "Bebidas"];
const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const state = { category: "Todos", query: "", sort: "featured", cart: new Map() };
const offerGrid = document.querySelector("#offer-grid");
const productGrid = document.querySelector("#product-grid");
const categoryFilters = document.querySelector("#category-filters");
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const cartDrawer = document.querySelector("#cart-drawer");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
let toastTimeout;

function productCard(product) {
  const oldPrice = product.oldPrice ? `<span class="old-price">${money.format(product.oldPrice)}</span>` : "";
  const offerTag = product.offer ? `<span class="offer-tag">${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF</span>` : "";
  return `<article class="product-card">
    <div class="product-photo">${offerTag}<img src="${product.image}" alt="${product.name}" loading="lazy"></div>
    <div class="product-info">
      <p class="product-category">${product.category}</p>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-unit">${product.unit}</p>
      <div class="product-bottom"><div class="price-wrap">${oldPrice}<span class="product-price">${money.format(product.price)}</span></div>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="Adicionar ${product.name} à sacola"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg></button>
      </div>
    </div>
  </article>`;
}

function renderOffers() {
  offerGrid.innerHTML = products.filter((product) => product.offer).slice(0, 4).map(productCard).join("");
}

function renderCategories() {
  const categories = ["Todos", ...categoryOrder];
  categoryFilters.innerHTML = categories.map((category) => `<button class="category-button${state.category === category ? " is-active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>`).join("");
}

function getVisibleProducts() {
  const matching = products.filter((product) => {
    const matchesCategory = state.category === "Todos" || product.category === state.category;
    const matchesQuery = `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR").includes(state.query.toLocaleLowerCase("pt-BR"));
    return matchesCategory && matchesQuery;
  });
  if (state.sort === "price-asc") matching.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") matching.sort((a, b) => b.price - a.price);
  if (state.sort === "name") matching.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  return matching;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  productGrid.innerHTML = categoryOrder.map((category) => {
    const categoryProducts = visibleProducts.filter((product) => product.category === category);
    if (categoryProducts.length === 0) return "";
    return `<section class="catalog-category" aria-labelledby="${categoryId(category)}-title">
      <div class="category-section-heading"><h3 id="${categoryId(category)}-title">${category}</h3><span>${categoryProducts.length} ${categoryProducts.length === 1 ? "produto" : "produtos"}</span></div>
      <div class="product-grid">${categoryProducts.map(productCard).join("")}</div>
    </section>`;
  }).join("");
  emptyState.hidden = visibleProducts.length > 0;
  resultsCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "produto" : "produtos"}`;
}

function categoryId(category) {
  return category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function addToCart(productId) {
  state.cart.set(productId, (state.cart.get(productId) || 0) + 1);
  renderCart();
  const product = products.find((item) => item.id === productId);
  showToast(`${product.name} adicionado à sacola`);
}

function renderCart() {
  const entries = [...state.cart.entries()];
  const totalItems = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => sum + products.find((product) => product.id === id).price * quantity, 0);
  document.querySelector("#cart-count").textContent = totalItems;
  document.querySelector("#cart-empty").hidden = entries.length > 0;
  document.querySelector("#cart-summary").hidden = entries.length === 0;
  document.querySelector("#cart-items").innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `<article class="cart-line"><img src="${product.image}" alt="" loading="lazy"><div><h3>${product.name}</h3><p>${money.format(product.price)} / ${product.unit}</p><div class="quantity-control"><button type="button" data-quantity="${id}" data-change="-1" aria-label="Remover uma unidade de ${product.name}">−</button><span>${quantity}</span><button type="button" data-quantity="${id}" data-change="1" aria-label="Adicionar uma unidade de ${product.name}">+</button></div></div><span class="cart-line-price">${money.format(product.price * quantity)}</span></article>`;
  }).join("");
  document.querySelector("#cart-subtotal").textContent = money.format(totalPrice);
}

function setCartOpen(isOpen) {
  cartDrawer.classList.toggle("is-open", isOpen);
  cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  cartDrawer.inert = !isOpen;
  drawerBackdrop.hidden = !isOpen;
  document.body.classList.toggle("drawer-is-open", isOpen);
  if (isOpen) document.querySelector("#close-cart").focus();
  else document.querySelector("#cart-trigger").focus();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(Number(addButton.dataset.add));

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderCategories();
    renderProducts();
  }

  const navCategory = event.target.closest("[data-nav-category]");
  if (navCategory) {
    state.category = navCategory.dataset.navCategory;
    renderCategories();
    renderProducts();
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const id = Number(quantityButton.dataset.quantity);
    const nextQuantity = (state.cart.get(id) || 0) + Number(quantityButton.dataset.change);
    if (nextQuantity <= 0) state.cart.delete(id);
    else state.cart.set(id, nextQuantity);
    renderCart();
  }
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderProducts();
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});
document.querySelector("#cart-trigger").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
document.querySelector("#continue-shopping").addEventListener("click", () => setCartOpen(false));
drawerBackdrop.addEventListener("click", () => setCartOpen(false));
document.querySelector("#checkout-button").addEventListener("click", () => showToast("Em breve: finalização de compra"));
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) setCartOpen(false);
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
});

renderOffers();
renderCategories();
renderProducts();
renderCart();