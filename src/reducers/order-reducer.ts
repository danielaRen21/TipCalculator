import type { MenuItem, OrderItem } from '../types';

export type OrderActions = {
  type: 'add-item';
  payload:
    | { item: MenuItem }
    | { type: 'remove-item'; payload: { item: MenuItem['id'] } }
    | { type: 'new-item'; payload: { item: MenuItem } }
    | { type: 'place-order' }
    | { type: 'add-tip'; payload: { value: number } };
};
export type OrderState = {
  order: OrderItem[];
};
export const initialState = {
  order: [],
  tip: 0,
};
