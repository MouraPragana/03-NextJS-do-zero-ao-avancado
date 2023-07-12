import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/About";
import { Contato } from "./pages/Contact";
import { DefaultLayout } from "./layout";
import { Error } from "./pages/Error";
import { Produto } from "./pages/Product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Sobre} />
          <Route path="/contact" Component={Contato} />
          <Route path="/produto/:id" Component={Produto} />
          <Route path="*" Component={Error} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
