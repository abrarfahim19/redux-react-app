import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreaseAction, increaseAction, reset } from '../services/actions/counterAction';


const Counter = () => {
    const count = useSelector((state) => (state.count));
    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(increaseAction())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    const handleDecrease = () => {
        dispatch(decreaseAction())
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h4>Count : {count}</h4>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrese</button>
        </div>
    );
};

export default Counter;