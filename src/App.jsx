import ListaTareas from "./components/ListaTareas";
import Formulario from "./components/Formulario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<ListaTareas />} />
        <Route path="/create-task" element={<Formulario />} />
        <Route path="/update-task/:id" element={<Formulario />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
