import { useState } from "react";

export const useCounter = () => {
    //Desustructuramos el valor y la funcion que modifica el valor
    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        // setCount(count + value);
        // setCount((current) => current + value);
        setCount(Math.max(value + count, 0));
    };
    return {
        //Properties
        count,

        //Actions
        increaseBy
    }
}
