import cartReducer from '@widgets/Cart/reducer/cart-reducer';
import { productsApi } from '@pages/Products/reducer/products-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';

const rootReducer = {
  [productsApi.reducerPath]: productsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  cart: cartReducer,
};

export default rootReducer;
