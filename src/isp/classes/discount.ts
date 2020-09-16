export abstract class Discount {
  protected discount = 0;

  applyDiscount(total: number): number {
    return Math.round((total - total * this.discount) * 100) / 100;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
