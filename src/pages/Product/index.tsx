import { useParams } from "react-router-dom";

export function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <span>Produto selecionado: {id}</span>
    </div>
  );
}
