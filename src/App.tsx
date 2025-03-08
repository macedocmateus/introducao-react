import { Button } from "./components/button";

import "./style.css";

export function App() {
    return (
        <div className="container">
            <Button name="Salvar" onClick={() => alert("Salvo")}></Button>
            <Button name="Editar"></Button>
            <Button name="Excluir"></Button>
        </div>
    );
}
