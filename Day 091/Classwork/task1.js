document.addEventListener( () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let cart = [];
  
    const addToCart = (productId, productName, productPrice) => {
        const productInCart = cart.find(item => item.id === productId);
      
        if (productInCart) {
            productInCart.quantity++;
        } else {
            cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
            });
        }
  
        renderCart();
    };
  
    const renderCart = () => {
        cartList.innerHTML = '';
        let totalPrice = 0;
  
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.quantity} x ${item.price} ₾`;
            cartList.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
  
      totalPriceElement.textContent = `Total: ${totalPrice} ₾`;
    };
  
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseInt(productElement.querySelector('p').textContent.replace('Price: ', '').replace(' ₾', ''));
  
            addToCart(productId, productName, productPrice);
        });
    });
});
  