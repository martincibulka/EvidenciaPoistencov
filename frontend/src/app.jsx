import { useState } from "react";
import PridatPoistenca from "./components/PridatPoistenca";
import VsetciPoistenci from "./components/VsetciPoistenci";
import VyhladatPoistenca from "./components/VyhladatPoistenca";

function App() {
  const [poistenci, setPoistenci] = useState([]);

  const pridatPoistenca = (novy) => {
    setPoistenci([...poistenci, novy]);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Správa poistených</h1>
      <PridatPoistenca pridatPoistenca={pridatPoistenca} />
      <VsetciPoistenci poistenci={poistenci} />
      <VyhladatPoistenca poistenci={poistenci} />
    </div>
  );
}

export default App;
