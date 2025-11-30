import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItem } from "../features/cart/cartSlice";
import { selectProducts } from "../features/cart/cartSelectors";

export default function ProductList() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-[70%]">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800">Products</h2>

      <div className="space-y-5">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex bg-white shadow-md hover:shadow-lg rounded-xl p-4 transition border border-gray-100"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
              <img src={p.image} alt={"Image"} className="w-24 h-24 rounded-md object-cover" />
            </div>

            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>

              <p className="text-gray-600 text-sm">
                {p.description}
              </p>

              <ul className="mt-1 text-xs text-gray-500 space-y-0.5">
                <li>• Quality assured</li>
                <li>• Fast delivery</li>
                <li>• Available now</li>
              </ul>
            </div>

            <div className="flex flex-col items-end justify-between">
              <div className="text-xl font-bold text-green-600">
                ₹{p.price.toFixed(2)}
              </div>

              <button
                onClick={() => dispatch(addItem(p.id))}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
