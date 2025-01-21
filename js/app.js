const images_thumbnail = document.querySelectorAll('.image-thumbnail img');
const images = document.querySelectorAll('.image img');


images_thumbnail.forEach(image => {
  image.addEventListener('mouseover', (e) => {
    image.classList.add('mouseover-img');
  })

  image.addEventListener('mouseout', (e) => {
    image.classList.remove('mouseover-img');
  })

  image.addEventListener('click', () => {
    images_thumbnail.forEach(img => {
      img.classList.remove("clicked-img");
    })

    image.classList.add("clicked-img");

    if(image.className.includes("clicked-img")){
      let image_number = image.className.split("-")[2]
      images.forEach(img => {
        img.setAttribute("src", `img/image-product-${image_number}.jpg`);
      })
    }
  });
});

const plus = document.querySelector('.image-plus');
const classNumber = document.querySelector('.number');
const minus = document.querySelector('.image-minus');
let number = Number(classNumber.innerHTML);
plus.addEventListener('click', (e) => {
  number++;
  classNumber.innerHTML = String(number);
})

minus.addEventListener('click', (e) => {
  if (number > 0){
    number--;
    classNumber.innerHTML = String(number);
  }
})

const cartNotification = document.querySelector('.cart_notification');
const addToCart = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart');
const div = document.createElement('div');
addToCart.addEventListener('click', (e) => {
  cartNotification.textContent = number > 0 ? number.toString() : '';
  cartNotification.classList.toggle('style-cart-notification', number > 0);
  if(number > 0){
    div.innerHTML = '<img src="img/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail" class="image-product-cart">\n' +
      '            <div>\n' +
      '              <p class="text-cart">Fall Limited Edition Sneakers</p>\n' +
      '              <div class="price-cart">\n' +
      '                <P class="price-quantity-cart">$125.00 x quantity</P>\n' +
      '                <p class="result">result</p>\n' +
      '              </div>\n' +
      '            </div>';
    contentCart.innerHTML = div.innerHTML;
    const priceQuantityCart = document.querySelector('.price-quantity-cart');
    let resultElement = document.querySelector('.result');
    let price = document.querySelector('.price').innerHTML.replace('$', '');
    let result = 0;
    priceQuantityCart.textContent = `$125.00 x ${number}`
    result = price * number;
    resultElement.textContent = `$${String(result.toFixed(2))}`;
  } else {
    contentCart.innerHTML = '';
    div.innerHTML = '<div>\n' +
      '              <p class="cart-empty">Your cart is empty</p>\n' +
      '            </div>';
    contentCart.innerHTML += div.innerHTML;
  }
})

const iconCart = document.querySelector('.icon-cart');
const contentCart= document.querySelector('.content-cart');
iconCart.addEventListener('click', (e) => {
  if (cart.classList.contains('cart-disable')) {
    cart.classList.remove('cart-disable');
    cart.classList.add('cart-activate');
  } else {
    cart.classList.remove('cart-activate');
    cart.classList.add('cart-disable');
  }
})


