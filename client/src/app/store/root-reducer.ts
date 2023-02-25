import cartReducer from '@widgets/Cart/reducer/cart-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';
import productsReducer from '@pages/Products/reducer/products-reducer';
import productsFilterReducer from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';

const rootReducer = {
  products: productsReducer,
  productsFilter: productsFilterReducer,
  [userApi.reducerPath]: userApi.reducer,
  cart: cartReducer,
};

export default rootReducer;
