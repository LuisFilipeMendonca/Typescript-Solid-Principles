import { Item } from './interfaces/item';

export class ShoppingCart {
  private _items: Item[] = [];

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

  clean(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length <= 0;
  }
}
