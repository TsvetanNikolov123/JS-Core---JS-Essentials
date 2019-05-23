function solve() {
    let totalMoney = 0;
    let addedProducts = [];

    document
        .getElementsByClassName('checkout')[0]
        .addEventListener('click', checkoutEvent);

    Array.from(document.getElementsByClassName('add-product')).forEach((addTo) => {
        addTo.addEventListener('click', addToCartEvent)
    });

    function addToCartEvent() {
        let clickedProduct = this.parentNode.parentNode;
        let clickedProductName = clickedProduct
            .getElementsByClassName('product-title')[0].innerHTML;

        let clickedProductPrice = Number(clickedProduct
            .getElementsByClassName('product-line-price')[0].textContent);

        if (!addedProducts.includes(clickedProductName)) {
            addedProducts.push(clickedProductName);
        }
        totalMoney += clickedProductPrice;

        document.getElementsByTagName('textarea')[0].textContent +=
            `Added ${clickedProductName} for ${clickedProductPrice.toFixed(2)} to the cart.\n`;
    }

    function checkoutEvent() {
        document.getElementsByTagName('textarea')[0].textContent +=
            `You bought ${addedProducts.join(', ')} for ${totalMoney.toFixed(2)}.\n`;

        Array.from(document.getElementsByClassName('add-product')).forEach((addTo) => {
            addTo.disabled = true;
        });

        document.getElementsByClassName('checkout')[0].disabled = true;
    }
}