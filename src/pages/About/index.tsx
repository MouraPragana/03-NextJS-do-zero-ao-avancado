import { Link } from "react-router-dom";

export function Sobre() {
  return (
    <div>
      <h1>Sobre o curso ReactTS</h1>
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contatos</Link>
    </div>
  );
}
