
// input articulos

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let number = 0;

plusBtn.addEventListener('click', ()=> {
    number++
    userInput.value = number
    
})

minusBtn.addEventListener('click', ()=> {
    number--;
    if (number <= 0) {
        number = 0;
    }
    userInput.value = number;
    
})

// Agregar al carrito 

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=> {

    lastValue = lastValue + number;
    
    cartNotification.innerText =  lastValue ;
    cartNotification.style.display = 'block';
    drawProductInModal();
    
    
});


// modal carrito 

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');

//let priceModal = document.querySelector('.cart-modal__price');

const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=> {
    
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
     
    }else {
        drawProductInModal();
    }

   
   
});

//Borrar el contenido de carrito 

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');


    deleteProductBtn.addEventListener('click', ()=> {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

// Cambiar imagenes 


const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery-previous');
const nextGalleryBtn = document.querySelector('.gallery-next');

let imgIndex = 1;


nextGalleryBtn.addEventListener('click', ()=> {
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', ()=> {
    changePreviousImage(imageContainer);
});




// mostrar modal gallery al click

const modalImages = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');


imageContainer.addEventListener('click', ()=>{
    modalImages.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=> {
    modalImages.style.display = 'none';
});

// cambiar imagenes thumbnails

let thumbnails = document.querySelectorAll('.gallery__thumnail');
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url( './images/image-product-${event.target.id}.jpg')`
    })
})

// cambiar imagenes MODAL

    let modalThumbnails = document.querySelectorAll('.modal-gallery__thumnails');
    const modalImageContainer = document.querySelector('.modal-gallery__image-container')
    modalThumbnails = [...modalThumbnails];

    modalThumbnails.forEach(modalThumbnail => {
        modalThumbnail.addEventListener('click', event=> {
            modalImageContainer.style.backgroundImage = `url( './images/image-product-${event.target.id.slice(-1)}.jpg')`
        })
    });


    //FUNCION DE FLECHAS NEXT Y PREVIOUS MODAL 

   const previousModalBtn = document.querySelector('.modal-gallery__previous');
   const nextModalBtn = document.querySelector('.modal-gallery__next')

    nextModalBtn.addEventListener('click', ()=> {
        changeNextImage(modalImageContainer);
    });
    previousModalBtn.addEventListener('click', ()=> {
        changePreviousImage(modalImageContainer)
    });

    





// funciones 

function modalPrices() {
    let priceModal = document.querySelector('.cart-modal__price');
    const modalImageContent = document.querySelector('.modal-gallery__image-container')
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
};


function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="detail">
        <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">125 x 3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>  
  <button class="cart-modal__checkout">Checkout</button>
    `
    deleteProduct();
    modalPrices();
};

function changeNextImage(imgContainer) {
    if (imgIndex === 4) {
        imgIndex = 1;
    }else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url( './images/image-product-${imgIndex}.jpg')`
};

function changePreviousImage(imgContainer){
    if (imgIndex === 1) {
        imgIndex = 4;
    }else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url( './images/image-product-${imgIndex}.jpg')`
};



