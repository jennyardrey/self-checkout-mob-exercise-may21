/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const { orange, kiwi, pineapple, apple, banana, catalogue } = require('../data/data')
const { selfCheckout } = require("../selfCheckout");

let ORANGE_BARCODE;
let BASKET;

  describe("selfCheckout", () => {
      beforeAll(() => {
        ORANGE_BARCODE = orange.barcode;
      })

      it('returns a product from the barcode', () => {
        expect(selfCheckout.scan(ORANGE_BARCODE)).toBe(orange)


      });

      it('adds item to basket', () => {
          expect(selfCheckout.basket).toEqual([])

          selfCheckout.addsToBasket(pineapple);
          
          expect(selfCheckout.basket.length).toEqual(1)
          expect(selfCheckout.basket).toEqual([pineapple])
      });

      it('adds the prices of the items in the basket', () => {
          selfCheckout.addsToBasket(apple);
          selfCheckout.addsToBasket(kiwi);
          expect(selfCheckout.total()).toEqual(110)
      });

      it('removes an item from the basket', () => {
          expect(selfCheckout.basket.length).toEqual(3);
          selfCheckout.removeItem(pineapple);
          
          expect(selfCheckout.basket.length).toEqual(2);
          expect(selfCheckout.basket).toEqual([apple, kiwi])

      })
  });

