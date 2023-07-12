import { Link } from "react-router-dom";

export function Error() {
  return (
    <div>
      <h1>Hum, parece que essa página não existe</h1>
      <span>Você pode estar procurando:</span>
      <br />
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contatos</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <br />
    </div>
  );
}
