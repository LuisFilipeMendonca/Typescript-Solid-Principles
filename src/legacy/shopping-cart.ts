type Item = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private _items: Item[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<Item[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items = this._items.filter((el, i) => i !== index);
  }

  total(): number {
    return +this._items
      .reduce((total, current) => (total += current.price), 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      this.sendMessage('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order has been received. The total is ${this.total()}`,
    );
    this.clean();
  }

  clean(): void {
    this._items.length = 0;
    this._orderStatus = 'open';
  }

  isEmpty(): boolean {
    return this._items.length <= 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }
}

const shoppingCart = new ShoppingCartLegacy();
console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);

shoppingCart.addItem({ name: 'Tshirt', price: 35.99 });
shoppingCart.addItem({ name: 'Pen', price: 1.01 });
// shoppingCart.removeItem(1);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
