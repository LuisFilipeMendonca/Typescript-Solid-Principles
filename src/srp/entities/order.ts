import { OrderStatus } from './interfaces/order';
import { ShoppingCart } from './shopping-cart';
import { Message } from '../services/message';
import { Persist } from '../services/persist';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persist: Persist,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.message.sendMessage('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.persist.saveOrder();
    this.message.sendMessage(
      `Your order has been received. The total is ${this.cart.total()}`,
    );
    this.cart.clean();
  }
}
