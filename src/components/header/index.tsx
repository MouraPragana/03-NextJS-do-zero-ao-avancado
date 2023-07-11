import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h2>Header da Página</h2>
      <Link to="/contact">Contato</Link>
    </header>
  );
}
