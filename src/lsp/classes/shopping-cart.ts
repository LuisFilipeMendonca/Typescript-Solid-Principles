import { Item } from './interfaces/item';
import { Discount } from './discount';

export class ShoppingCart {
  private _items: Item[] = [];

  constructor(private readonly discount: Discount) {}

  get items(): Readonly<Item[]> {
    return this._items;
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

  totalWithDiscount(): number {
    // Breaking Liskov Subsitution Principle
    const result = this.discount.applyDiscount(this.total());

    if (typeof result === 'number') return result;
    return this.total();
  }

  clean(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length <= 0;
  }
}
