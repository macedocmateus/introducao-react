import { Button } from "./components/button";

export function App() {
    return (
        <div>
            <Button name="Salvar" onClick={() => alert("Salvo")}></Button>
            <Button name="Editar"></Button>
            <Button name="Excluir"></Button>
        </div>
    );
}
