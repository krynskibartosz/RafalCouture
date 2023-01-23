import { faker } from '@faker-js/faker';
import { ShoppingItemDAO } from '../../application/dao/shopping-item';
import { describe, beforeAll, test, expect, beforeEach } from 'vitest';
import { connectDatabase } from '../../infrastructure/db';

describe('ShoppingItemDAO', () => {
  let dao: ShoppingItemDAO;

  beforeAll(async () => {
    await connectDatabase();
  });

  beforeEach(async () => {
    dao = new ShoppingItemDAO();
  });

  describe('getAllShoppingItems()', () => {
    test('should return all shopping items', async () => {
      const name1 = faker.commerce.productName();
      const name2 = faker.commerce.productName();
      await dao.createShoppingItem(name1, 10);
      await dao.createShoppingItem(name2, 20);
      const items = await dao.getAllShoppingItems();
      expect(items.some((item) => item.name === name1 && item.price === 10)).toBeTruthy();
      expect(items.some((item) => item.name === name2 && item.price === 20)).toBeTruthy();
    });
  });
  describe('createShoppingItem()', () => {
    test('should create a new shopping item with correct values', async () => {
      const name = faker.commerce.productName();
      const price = +faker.commerce.price();
      await dao.createShoppingItem(name, price);
      const item = await dao.shoppingItemRepository.findOne({ where: { name } });
      expect(item).toBeDefined();
      expect(item?.name).toBe(name);
      expect(item?.price).toBe(price);
    });

    const negativePrice = -10;
    const positivePrice = -10;
    test('should not create a new shopping item with negative price', async () => {
      try {
        const itemName = 'item 2';
        await dao.createShoppingItem(itemName, negativePrice);
      } catch (err: any) {
        expect(err.message).toBe('Invalid price');
      }
    });
    test('should not create a new shopping item with empty name', async () => {
      try {
        await dao.createShoppingItem('', positivePrice);
      } catch (err: any) {
        expect(err.message).toBe('Invalid name');
      }
    });

    test('should not create a new shopping item with duplicate name', async () => {
      const itemName = 'item 3';
      try {
        await dao.createShoppingItem(itemName, positivePrice);
        await dao.createShoppingItem(itemName, 20);
      } catch (err: any) {
        expect(err.message).toBe('Name already exists');
      }
    });
  });
});
