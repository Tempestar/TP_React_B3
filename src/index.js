import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Bracket from "./routes/bracket";
import Règles from "./routes/règles";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="bracket" element={<Bracket />} />
      <Route path="règles" element={<Règles />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);