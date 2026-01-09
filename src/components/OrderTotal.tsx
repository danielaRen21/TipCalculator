import { useMemo } from 'react';
import type { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};
export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const total = useMemo(() => tipAmount + subTotalAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina:</h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:
          <span className="font-bold"> {formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="m-full bg-black p-3 uppercase text-white font-bold mt-5 disabled:opacity-10"
        disabled={subTotalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  );
}
