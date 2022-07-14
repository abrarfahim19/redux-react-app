import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h4>Count : {count}</h4>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;