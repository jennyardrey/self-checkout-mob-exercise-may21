/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data)*/
// 2 - As a user, I would like to be able to add an item to my basket.
/* 3 - As a user, I would like to be able to see the total price of all items in my basket. */
// 4 - As a user, I would like to be able to remove an item from my basket.

const { catalogue } = require("./data/data")

const selfCheckout = {
    basket: [],
    scan: function(barcode) {
        return catalogue.find((item) => item.barcode === barcode)
    },
    addsToBasket: function(item){
        this.basket.push(item);
    },
    total: function() {
        return this.basket.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    },
    removeItem: function(item) {
        this.basket = this.basket.filter(element => element !== item)
    }


}

const warehouse = {
    loadingBay: [],
    acceptDelivery: function(){
        
    }
}

module.exports = { selfCheckout };