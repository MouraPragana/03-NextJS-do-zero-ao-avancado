import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div>
      <h1>Contatos</h1>
      <br />
      <span>Emai: teste@teste.com</span>
      <br />
      <Link to="/">Home</Link> <br />
      <Link to="/about">Sobre</Link>
    </div>
  );
}
