import cartReducer from '@widgets/Cart/reducer/cart-reducer';
import userReducer from '@pages/AuthPage/reducer/user-reducer';
import productsReducer from '@pages/Products/reducer/products-reducer';

const rootReducer = {
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
};

export default rootReducer;
