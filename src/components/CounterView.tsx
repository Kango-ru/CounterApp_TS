import { Counter } from "../models/Counter"
import { useState } from "react"
import { CounterViewModel } from "../viewmodels/CounterViewModel"

export function CounterView() {
    let viewModel = new CounterViewModel();
    let [counter, setCounter] = useState(viewModel.getCounter());

    let onClickButton = (value: number) => {
        console.log("Clicked a button");
        viewModel.addCount(value);
        setCounter(viewModel.getCounter());
    };

    return (
        <div>
            <button onClick={() => onClickButton(1)}>+</button>
            <button onClick={() => onClickButton(-1)}>-</button>
            <h1>{viewModel.getCounter().count}</h1>
        </div>
    )
}