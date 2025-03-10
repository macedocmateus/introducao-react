import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
    const [count, setCount] = useState(0);

    // const { show } = useMessage({ name: "Mateus", age: 22 });

    function handleAdd() {
        setCount((prevState) => prevState + 1);
    }

    function handleRemove() {
        setCount((prevState) => prevState - 1);
    }

    useEffect(() => {
        console.log("Oi");
    }, []);

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
