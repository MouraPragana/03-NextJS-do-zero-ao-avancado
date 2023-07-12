import { BemVindo, Container, Header } from "./styles";

export function NovaAula() {
  return (
    <Container>
      <Header>
        <a href="">Projeto Styled</a>
      </Header>
      <BemVindo color="blue">Bem vindo ao sistema !</BemVindo>
    </Container>
  );
}

// export function NovaAula() {
//   return (
//     <div className="container">
//       <header className="header">
//         <a href="" className="titulo">
//           Projeto Styled
//         </a>
//       </header>
//       <h1>Bem vindo ao sistema !</h1>
//     </div>
//   );
// }
