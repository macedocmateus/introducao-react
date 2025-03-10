import "./global.css";
import { useState } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
    const [count, setCount] = useState(0);

    // const { show } = useMessage({ name: "Mateus", age: 22 });

    function handleAdd() {
        setCount(count + 1);
    }

    function handleRemove() {
        setCount(count - 1);
    }

    return (
        <div className={styles.container}>
            <Button
                name="Adicionar"
                onClick={() => {
                    handleAdd();
                }}
            ></Button>
            <span>{count}</span>
            <Button
                name="Remover"
                onClick={() => {
                    handleRemove();
                }}
            ></Button>
        </div>
    );
}
