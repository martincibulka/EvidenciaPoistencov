function VsetciPoistenci({ poistenci }) {
  return (
    <div className="card p-3">
      <h2 className="card-title">Všetci poisteci</h2>
      <table className="poisteci table-striped">
        <thead>
          <tr>
            <th>Meno</th>
            <th>Priezvisko</th>
            <th>Vek</th>
            <th>Telefón</th>
          </tr>
        </thead>
        <tbody>
          {poistenci.map((p, index) => (
            <tr key={index}>
              <td>{p.meno}</td>
              <td>{p.priezvisko}</td>
              <td>{p.vek}</td>
              <td>{p.telefon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VsetciPoistenci;
