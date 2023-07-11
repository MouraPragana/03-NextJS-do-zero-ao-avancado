import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Bem vindo a página home !</h1>
      <Link to="/about">Sobre</Link> <br />
      <Link to="/contact">Contatos</Link>
    </div>
  );
}
