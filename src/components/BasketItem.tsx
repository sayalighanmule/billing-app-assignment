import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItem, removeItem } from "../features/cart/cartSlice";
import { selectProducts } from "../features/cart/cartSelectors";

interface Props {
  id: string;
  quantity: number;
}

export default function BasketItem({ id, quantity }: Props) {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const product = products.find((p) => p.id === id)!;

  return (
    <div className="border-b py-3">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{product.name}</span>
        <span>₹{product.price.toFixed(2)}</span>
        <div className="flex items-center">
          <button
            className="px-2 bg-blue-500 text-white rounded-l"
            onClick={() => dispatch(addItem(id))}
          >
            +
          </button>
          <span className="px-3">{quantity}</span>
          <button
            className="px-2 bg-blue-500 text-white rounded-r"
            onClick={() => dispatch(removeItem(id))}
          >
            -
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Item price ₹{product.price.toFixed(2)} × {quantity} = ₹{(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
}
