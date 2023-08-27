import { useState } from "react";
import cls from './Counter.module.scss';

export const Counter = () => {
    const [state, setState] = useState(0);

    const inc = () => {
        setState(s => s + 1)
    }

    return (
        <div>
            <h1>{state}</h1>
            <button className={cls.btn} onClick={inc}>inc</button>
        </div>
    );
};
