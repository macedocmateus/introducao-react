import "./global.css";

import { Button } from "./components/button";
import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
    const { show } = useMessage({ name: "Mateus", age: 22 });

    return (
        <div className={styles.container}>
            <Button
                name="Adicionar"
                onClick={() => show("Mensagem personalizada do meu hook")}
            ></Button>
            <span>0</span>
            <Button name="Remover"></Button>
        </div>
    );
}
