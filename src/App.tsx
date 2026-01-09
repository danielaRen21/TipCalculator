import { menuItems } from './data/db';
import MenuItem from './components/MenuItem';
import useOrder from './hook/useOrder';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TippercentageForm';

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl text-center font-black">
          Calculadora de Propinas y Consumos
        </h1>
      </header>
      <div className=" flex justify-content-center">
        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className="p-5">
            <div>
              <h2 className="text-4xl font-black">Menu</h2>
              <div className="space-y-3 mt-10">
                {menuItems.map((item) => (
                  <MenuItem key={item.id} item={item} addItem={addItem} />
                ))}
              </div>
            </div>
          </div>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {order.length ? (
              <>
                <OrderContents order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} tip={tip} />
                <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
              </>
            ) : (
              <p className="text-center">La orden esta vacia</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
