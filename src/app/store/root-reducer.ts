import cartReducer from '@widgets/Cart/reducer/cart-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';
import productsReducer from '@pages/Products/reducer/products-reducer';

const rootReducer = {
  products: productsReducer,
  [userApi.reducerPath]: userApi.reducer,
  cart: cartReducer,
};

export default rootReducer;
