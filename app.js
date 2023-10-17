// let searchForm = document.querySelectorAll('.search-form');

// document.querySelector('#search-btn').onclick=()=>{
//     searchForm.classList.toggle('active');
    
// }

// let shoppingCart = document.querySelectorAll('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     shoppingCart.classList.toggle('active');
    
// }

// Select all elements with the class 'search-form' and 'shopping-cart'
let searchForms = document.querySelectorAll('.search-form');
let shoppingCart = document.querySelectorAll('.shopping-cart');

// Select the button elements with IDs 'search-btn' and 'cart-btn'
let searchButton = document.querySelector('#search-btn');
let cartButton = document.querySelector('#cart-btn');

// Add a click event listener for the search button
searchButton.onclick = () => {
    // Loop through all the search-form elements and toggle the 'active' class on each one
    searchForms.forEach(form => {
        form.classList.toggle('active');
    });
    loginForms.forEach((loginForm) => {
        loginForm.classList.remove('active');
    });
    shoppingCart.forEach(cart => {
        cart.classList.remove('active');
    });
}

// Add a click event listener for the cart button
cartButton.onclick = () => {
    // Loop through all the shopping-cart elements and toggle the 'active' class on each one
    shoppingCart.forEach(cart => {
        cart.classList.toggle('active');
    });
    searchForms.forEach(form => {
        form.classList.remove("active");
    });
    loginForms.forEach((loginForm) => {
        loginForm.classList.remove('active');
    });
}

let loginForms = document.querySelectorAll('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForms.forEach((loginForm) => {
        loginForm.classList.toggle('active');
    });
    searchForms.forEach(form => {
        form.classList.remove('active');
    });
    shoppingCart.forEach(cart => {
        cart.classList.remove('active');
    });

}

var swiper= new Swiper(".product-slider",{

loop:true,
spaceBetween :20,
autoplay:{
    delay:2000,
    disableOnInteraction:false,
},
centeredSlides:true,

breakpoints: {

1020: {
slidesPerView: 3,
},
},
});


