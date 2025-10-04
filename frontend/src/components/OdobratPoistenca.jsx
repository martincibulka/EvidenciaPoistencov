const odobratPoistenca = (index) => {
  const novePoistenci = [...poistenci];
  novePoistenci.splice(index, 1);
  setPoistenci(novePoistenci);
};

