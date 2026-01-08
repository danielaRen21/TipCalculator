import { menuItems } from './data/db';
import MenuItem from './components/MenuItem';
import useOrder from './hook/useOrder';

function App() {
  const {addItem} = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-4xl text-center font-black">
          Calculadora de propinas
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
          <div>
            <h2>Consumos</h2>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
