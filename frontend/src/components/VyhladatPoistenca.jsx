import { useState } from "react";

function VyhladatPoistenca({ poistenci }) {
  const [meno, setMeno] = useState("");
  const [priezvisko, setPriezvisko] = useState("");
  const [vysledky, setVysledky] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setVysledky(poistenci.filter(p => p.meno === meno && p.priezvisko === priezvisko));
  };

  return (
    <div className="card p-3 mb-3">
      <h2 className="card-title">Vyhľadať poistenca</h2>
      <form onSubmit={handleSearch}>
        <input className="form-control mb-2" placeholder="Meno" value={meno} onChange={e => setMeno(e.target.value)} />
        <input className="form-control mb-2" placeholder="Priezvisko" value={priezvisko} onChange={e => setPriezvisko(e.target.value)} />
        <button className="btn btn-success w-100">Vyhľadať</button>
      </form>
      <ul className="list-group mt-2">
        {vysledky.map((p, index) => (
          <li className="list-group-item" key={index}>
            {p.meno} {p.priezvisko}, {p.vek} rokov, Tel: {p.telefon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VyhladatPoistenca;
