import { useEffect } from "react";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useAppDispatch } from "./app/hooks";
import { loadCart } from "./features/cart/cartThunks";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <div>
    <div className="min-h-screen p-10">
      <MyHeader/>
      <div className="flex justify-center gap-6">
        <ProductList />
        <Basket />
      </div>
    </div>
    <MyFooter/>
    </div>
  );
}

export default App;
