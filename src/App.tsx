import { Button } from "./components/button";

import styles from "./app.module.css";

export function App() {
    return (
        <div className={styles.container}>
            <Button name="Salvar" onClick={() => alert("Salvo")}></Button>
            <span>0</span>
            <Button name="Excluir"></Button>
        </div>
    );
}
