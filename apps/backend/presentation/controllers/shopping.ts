import { ShoppingItemDAO } from '../../application/dao/shopping-item';
import { ShoppingItemService } from '../services/shopping';
import router from '../routes/shopping-item';

class ShoppingItemController {
  private shoppingItemService: ShoppingItemService;
  constructor() {
    this.shoppingItemService = new ShoppingItemService(new ShoppingItemDAO());
  }

  public getRouter() {
    return router;
  }
}

export default new ShoppingItemController().getRouter();
