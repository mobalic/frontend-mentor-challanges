const cart = document.querySelector('#cart');
const productsCart = document.querySelector('#products-cart');
const incrementBtn = document.querySelector('#increment-btn');
const decrementBtn = document.querySelector('#decrement-btn');
const counterElm = document.querySelector('#counterElm');
const addProductBtn = document.querySelector('#add-btn');
const cartBtn = document.querySelector('#cart-btn');

let counter = 0;
let productCount = 0;
let price = 125.0;

incrementBtn.addEventListener('click', () => setCounter(counter + 1));
decrementBtn.addEventListener(
  'click',
  () => counter && setCounter(counter - 1)
);
addProductBtn.addEventListener('click', () => {
  if (counter) {
    getProductCount();

    productsCart.innerHTML = `<div class="cart-item">
   <img
     src="/images/image-product-1-thumbnail.jpg"
     alt="Sneakers image"
   />
   <div class="cart-text">
     <div class="product-name">
       Fall Limited Edition Sneakers
     </div>
     <div class="product-total">
       $${price} x ${productCount} &nbsp;<span> $${price * productCount}</span>
     </div>
   </div>

   <button id="delete-item-btn">
     <svg
       width="15"
       height="17"
       viewBox="0 0 15 17"
       xmlns="http://www.w3.org/2000/svg"
       fill="#C3CAD9"
     >
       <path
         d="M0.75 2.87501V2.00001C0.75 1.58401 1.084 1.25001 1.5 1.25001H5L5.294 0.666006C5.35512 0.540778 5.4503 0.435319 5.56864 0.361737C5.68697 0.288154 5.82365 0.249429 5.963 0.250006H9.534C9.67363 0.249918 9.81052 0.288811 9.92924 0.362307C10.048 0.435804 10.1438 0.540984 10.206 0.666006L10.5 1.25001H14C14.416 1.25001 14.75 1.58401 14.75 2.00001V2.87501C14.7497 2.97438 14.7101 3.06961 14.6399 3.13988C14.5696 3.21015 14.4744 3.24974 14.375 3.25001H1.125C1.02562 3.24974 0.930396 3.21015 0.860127 3.13988C0.789857 3.06961 0.750264 2.97438 0.75 2.87501ZM13.75 4.62501V14.75C13.75 15.1478 13.592 15.5294 13.3107 15.8107C13.0294 16.092 12.6478 16.25 12.25 16.25H3.25C2.85218 16.25 2.47064 16.092 2.18934 15.8107C1.90804 15.5294 1.75 15.1478 1.75 14.75V4.62501C1.75 4.41901 1.919 4.25001 2.125 4.25001H13.375C13.581 4.25001 13.75 4.41901 13.75 4.62501ZM5.25 6.75001C5.25 6.47501 5.025 6.25001 4.75 6.25001C4.475 6.25001 4.25 6.47501 4.25 6.75001V13.75C4.25 14.025 4.475 14.25 4.75 14.25C5.025 14.25 5.25 14.025 5.25 13.75V6.75001ZM8.25 6.75001C8.25 6.47501 8.025 6.25001 7.75 6.25001C7.475 6.25001 7.25 6.47501 7.25 6.75001V13.75C7.25 14.025 7.475 14.25 7.75 14.25C8.025 14.25 8.25 14.025 8.25 13.75V6.75001ZM11.25 6.75001C11.25 6.47501 11.025 6.25001 10.75 6.25001C10.475 6.25001 10.25 6.47501 10.25 6.75001V13.75C10.25 14.025 10.475 14.25 10.75 14.25C11.025 14.25 11.25 14.025 11.25 13.75V6.75001Z"
       />
     </svg>
   </button>
 </div>
 <button class="btn-custom" id="checkout">Checkout</button>`;

    handleDeleteProducts();
    cartBtn.innerHTML = `<span id="cart-btn-count">${productCount}</span>
 <svg
   width="22"
   height="20"
   xmlns="http://www.w3.org/2000/svg"
   fill="#69707D"
 >
   <path
     id="myCart"
     d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
     fill-rule="nonzero"
   />
 </svg>`;
  }
});

cartBtn.addEventListener('click', () => {
  cart.classList.toggle('open-cart');
});

function setCounter(count) {
  counter = count;
  counterElm.innerHTML = ` ${counter}`;
}

function getProductCount() {
  productCount += counter;
  setCounter(0);
}

function handleDeleteProducts() {
  document.querySelector('#delete-item-btn').addEventListener('click', () => {
    productCount = 0;
    productsCart.innerHTML = `<div class="empty-cart">Your cart is empty</div>`;
    cartBtn.innerHTML = `<svg
    width="22"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#69707D"
  >
    <path
      id="myCart"
      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
      fill-rule="nonzero"
    />
  </svg>`;
  });
}

setCounter(0);

productsCart.innerHTML = `<div class="empty-cart">Your cart is empty</div>`;
