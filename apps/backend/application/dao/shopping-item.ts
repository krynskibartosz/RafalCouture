import { injectable } from 'inversify';
import { db } from '../../infrastructure/db';
import { Repository } from 'typeorm';
import { ShoppingItem } from '../../domain/entities/shopping-item';

export interface IShoppingItemDAO {
  createShoppingItem(name: string, price: number): Promise<void>;
  getAllShoppingItems(): Promise<ShoppingItem[]>;
}

@injectable()
export class ShoppingItemDAO implements IShoppingItemDAO {
  public shoppingItemRepository: Repository<ShoppingItem>;

  constructor() {
    this.shoppingItemRepository = db.getRepository(ShoppingItem);
  }

  async createShoppingItem(name: string, price: number) {
    if (price < 0) {
      throw new Error('Invalid price');
    }
    if (!name) {
      throw new Error('Invalid name');
    }
    const existingItem = await this.shoppingItemRepository.findOne({ where: { name } });
    if (existingItem) {
      throw new Error('Name already exists');
    }
    const item = new ShoppingItem();
    item.name = name;
    item.price = price;

    await this.shoppingItemRepository.save(item);
  }

  async getAllShoppingItems() {
    const items = await this.shoppingItemRepository.find();
    return items;
  }
}
