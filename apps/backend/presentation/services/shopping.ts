import { inject, injectable } from 'inversify';
import { IShoppingItemDAO } from '../../application/dao/shopping-item';

@injectable()
export class ShoppingItemService {
  private shoppingItemDAO: IShoppingItemDAO;
  constructor(@inject('IShoppingItemDAO') shoppingItemDAO: IShoppingItemDAO) {
    this.shoppingItemDAO = shoppingItemDAO;
  }

  async createShoppingItem(name: string, price: number) {
    return this.shoppingItemDAO.createShoppingItem(name, price);
  }

  async getAllShoppingItems() {
    return this.shoppingItemDAO.getAllShoppingItems();
  }
}
