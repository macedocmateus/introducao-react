import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
    const [count, setCount] = useState(0);

    // const message = useMessage({ name: "Mateus", age: 22 });

    function handleAdd() {
        setCount((prevState) => prevState + 1);
    }

    function handleRemove() {
        if (count > 0) {
            setCount((prevState) => prevState - 1);
        }
    }

    useEffect(() => {
        if (count > 0) {
            console.log("O Valor mudou para: " + count);
        }
    }, [count]);

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
