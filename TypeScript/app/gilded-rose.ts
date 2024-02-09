export class Item {
  name: ItemType | string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export enum ItemType {
  BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case ItemType.BRIE:
          this.updateBrie(item);
          continue;

        case ItemType.BACKSTAGE:
          this.updateBackStage(item);
          break;

        case ItemType.SULFURAS:
          break;

        case ItemType.CONJURED:
          this.updateConjured(item);
          break;

        default:
          this.updateDefault(item);
      }
    }
    return this.items;
  }

  private updateBrie(item: Item) {
    this.increaseQuality(item);
    item.sellIn--;

    if (item.sellIn < 0 && item.quality < 50) {
      this.increaseQuality(item);
    }
  }

  private updateBackStage(item: Item) {
    if (item.quality < 50) {
      this.increaseQuality(item);

      if (item.quality < 50) {
        if (item.sellIn < 11) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this.increaseQuality(item);
        }
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateConjured(item: Item) {
    item.quality -= 2;
    item.sellIn--;
  }

  private updateDefault(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }

  private increaseQuality(item: Item) {
    if(item.quality < 50){
      item.quality++;
    }
  }
}
