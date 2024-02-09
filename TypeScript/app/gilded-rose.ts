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

const enum ItemType {
  BRIE = 'Aged Brie',
  BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS = 'Sulfuras, Hand of Ragnaros',
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
          GildedRose.updateBrie(item);
          continue;

        case ItemType.BACKSTAGE:
          GildedRose.updateBackStage(item);
          break;

        case ItemType.SULFURAS:
          GildedRose.updateSulfuras(item);
          break;

        default:
          GildedRose.updateDefault(item);
      }
    }
    return this.items;
  }

  private static updateBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private static updateBackStage(item: Item) {
    if (item.name != ItemType.BRIE && item.name != ItemType.BACKSTAGE) {
      if (item.quality > 0) {
        if (item.name != ItemType.SULFURAS) {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == ItemType.BACKSTAGE) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != ItemType.SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != ItemType.BRIE) {
        if (item.name != ItemType.BACKSTAGE) {
          if (item.quality > 0) {
            if (item.name != ItemType.SULFURAS) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }

  private static updateSulfuras(item: Item) {
    if (item.name != ItemType.BRIE && item.name != ItemType.BACKSTAGE) {
      if (item.quality > 0) {
        if (item.name != ItemType.SULFURAS) {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == ItemType.BACKSTAGE) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != ItemType.SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != ItemType.BRIE) {
        if (item.name != ItemType.BACKSTAGE) {
          if (item.quality > 0) {
            if (item.name != ItemType.SULFURAS) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }

  private static updateDefault(item: Item) {
    if (item.name != ItemType.BRIE && item.name != ItemType.BACKSTAGE) {
      if (item.quality > 0) {
        if (item.name != ItemType.SULFURAS) {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == ItemType.BACKSTAGE) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != ItemType.SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != ItemType.BRIE) {
        if (item.name != ItemType.BACKSTAGE) {
          if (item.quality > 0) {
            if (item.name != ItemType.SULFURAS) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
}
