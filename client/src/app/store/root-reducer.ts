import cartReducer from '@widgets/Cart/reducer/cart-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';
import productsReducer from '@pages/Products/reducer/products-reducer';
import productCardReducer from '@pages/ProductCard/reducer/product-card-reducer';
import productsFilterReducer from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';

const rootReducer = {
  products: productsReducer,
  productsFilter: productsFilterReducer,
  productCard: productCardReducer,
  [userApi.reducerPath]: userApi.reducer,
  cart: cartReducer,
};

export default rootReducer;
