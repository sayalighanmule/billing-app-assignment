import { useAppSelector, useAppDispatch } from "../app/hooks";
import BasketItem from "./BasketItem";
import { selectCartItems, selectSubtotal, selectSavings, selectTotal } from "../features/cart/cartSelectors";
import { saveCart } from "../features/cart/cartThunks";

export default function Basket() {
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  const savings = useAppSelector(selectSavings);
  const total = useAppSelector(selectTotal);
  const dispatch = useAppDispatch();

  const handleSave = () => dispatch(saveCart(items));

  return (
    <div className="p-4 bg-white shadow rounded w-[30%]">
      <h2 className="text-2xl font-bold mb-4">Basket</h2>

      {Object.entries(items).map(([id, qty]) => (
        <BasketItem key={id} id={id} quantity={qty} />
      ))}

      <div className="mt-4 text-lg">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-red-600">
          <span>Savings:</span>
          <span>₹{savings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl mt-2">
          <span>Total Amount:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Save Basket
      </button>
    </div>
  );
}
