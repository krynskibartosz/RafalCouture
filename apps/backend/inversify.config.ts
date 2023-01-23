import { Container } from 'inversify';
import { IShoppingItemDAO, ShoppingItemDAO } from './application/dao/shopping-item';
import { ShoppingItemService } from './presentation/services/shopping';

const container = new Container();

// bind interfaces to their implementations
container.bind<IShoppingItemDAO>('IShoppingItemDAO').to(ShoppingItemDAO);
container.bind<ShoppingItemService>('IShoppingItemService').to(ShoppingItemService);

export { container };
