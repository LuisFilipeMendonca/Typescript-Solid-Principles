import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Message } from './services/message';
import { Persist } from './services/persist';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
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
order.checkout();
console.log(order.orderStatus);
order.checkout();
