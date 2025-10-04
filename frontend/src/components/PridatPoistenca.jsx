import { useState } from "react";

export default function PridatPoistenca({ pridatPoistenca }) {
  const [meno, setMeno] = useState("");
  const [priezvisko, setPriezvisko] = useState("");
  const [vek, setVek] = useState("");
  const [telefon, setTelefon] = useState("");

  const odoslat = (e) => {
    e.preventDefault();
    pridatPoistenca({ meno, priezvisko, vek, telefon });
    setMeno("");
    setPriezvisko("");
    setVek("");
    setTelefon("");
  };

  return (
    <form onSubmit={odoslat} className="mb-4">
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Meno"
            value={meno}
            onChange={(e) => setMeno(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Priezvisko"
            value={priezvisko}
            onChange={(e) => setPriezvisko(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Vek"
            value={vek}
            onChange={(e) => setVek(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Telefón"
            value={telefon}
            onChange={(e) => {
              const value = e.target.value;
              // kontrola aby bolo možné vložiť len čísla
              if (/^\d*$/.test(value)) {
                setTelefon(value);
              }
            }}
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">
            Pridať
          </button>
        </div>
      </div>
    </form>
  );
}
