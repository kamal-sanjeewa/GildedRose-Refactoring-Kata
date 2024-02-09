import { GildedRose, Item } from "@/gilded-rose";

describe('Gilded Rose', () => {
  describe('updateQuality', () => {
    it('should degrade quality and sellIn for Other items', () => {
      const items = [new Item('Other Item', 10, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });

    it('should degrade quality twice as fast after sell by date for Other items', () => {
      const items = [new Item('Other Item', 0, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(18);
    });

    it('should increase quality for Aged Brie', () => {
      const items = [new Item('Aged Brie', 10, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(21);
    });

    it('should not increase quality above 50 for Aged Brie', () => {
      const items = [new Item('Aged Brie', 10, 50)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(50);
    });

    it('should set quality to 0 for Backstage passes after concert', () => {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('should increase quality for Backstage passes by 2 when 10 days or less', () => {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(22);
    });

    it('should increase quality for Backstage passes by 3 when 5 days or less', () => {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23);
    });

    it('should keep quality unchanged for Sulfuras', () => {
      const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(80);
    });

    it('should handle edge case when sellIn is zero for Other items', () => {
      const items = [new Item('Other Item', 0, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(18);
    });

    it('should handle edge case when sellIn is negative for Other items', () => {
      const items = [new Item('Other Item', -1, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(18);
    });

    it('should handle edge case when sellIn is zero for Backstage passes', () => {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('should handle edge case when sellIn is negative for Backstage passes', () => {
      const items = [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20)];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(0);
    });
  });
});
