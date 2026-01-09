import { formatCurrency } from '../helpers';
import type { MenuItem, OrderItem } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumos</h2>
      <div className="space-y-3 mt-10">
        {
          <p>
            {order.map((orderItem) => (
              <div
                className="flex justify-between border-t border-gray-200 items-center py-5 last-of-type:border-b"
                key={orderItem.id}
              >
                <div>
                  <p className="text-lg">
                    {orderItem.name} - {formatCurrency(orderItem.price)}
                  </p>
                  <p className="font-black">
                    Cantidad: {orderItem.quantity} -
                    {formatCurrency(orderItem.price * orderItem.quantity)}
                  </p>
                </div>

                <button
                  className="bg-red-600 h-8 w-8 rounded-full text-white"
                  onClick={() => removeItem(orderItem.id)}
                >
                  X
                </button>
              </div>
            ))}
          </p>
        }
      </div>
    </div>
  );
}
