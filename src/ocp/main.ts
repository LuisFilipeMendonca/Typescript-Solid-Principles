import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Message } from './services/message';
import { Persist } from './services/persist';
import { Product } from './classes/product';
import { NoDiscount, FiftyPercentDiscount } from './classes/discount';

const discount = new FiftyPercentDiscount();
// const discount = new NoDiscount();
const shoppingCart = new ShoppingCart(discount);
const message = new Message();
const persist = new Persist();
const order = new Order(shoppingCart, message, persist);
console.log(shoppingCart.items);
console.log(order.orderStatus);

shoppingCart.addItem(new Product('Tshirt', 35.99));
shoppingCart.addItem(new Product('Pen', 1.02));
// shoppingCart.removeItem(1);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
order.checkout();
