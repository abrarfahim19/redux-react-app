### React-Redux app.

The very first thing one needs to know about is when to use Redux?
- We use Redux for large/medium app
- Only when we use it for such app it gives us the predictability that can be of high value. Else just use **context API**

## The procedure of implementing Redux in React:

1. Initiate State
2. Create Action
3. Write action logic in Reducer
4. Create Store
5. Wrap Store with Provider
6. Access the state with *useSelector()*
7. Dispatch Action with *useDispatch()*

Following these we can create a Redux-React App

## Using Redux-toolkit

Using the Redux-toolkit makes a developers life quite easier. And besides, many redux functions we use like *createStore* is depreciated. Redux Documentation advises to use Redux-toolkit.

### The Procedures of using Redux-Toolkit

1. The convention is to create two *app* and *Features* folder in the *src*
2. The app folder will contain the **store.js** and Features folder will have saveral folder named the states we want to manage.
Example: For *Counter state* we shall create a Counter folder in the features.
3. The folder will contain a *stateSlice* and a *stateView* file.
4. The slice will call the *createSlice* from Redux-Toolkit. It will take following parameter:
    - name
    - initialState
    - reducers
5. The reducers will have all the actions in it.

Example of counterSlice.js:

```js
import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        },
    }
})

export const { increment, decrement, reset, incrementByAmount} = counter.actions

export default counter.reducer;
```

6. Create store with the *configureStore()* function. Example for three Reducers namely:
    - counterReducer from CounterSlice
    - todoReducer from todoSlice
    - gitReducer from checkGithubSlice

Code Example:
```js
import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "../features/checkGithub/checkGithubSlice";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";

const storeReduxToolkit = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        github: gitReducer

}
})

export default storeReduxToolkit;
```

7. To use the states in View. We need to use *useSelector* for accesing the state and *useDispatch* for action

Code Example:
```js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => (state.counter.count));
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Count: {count}</h2>
          <button onClick={()=> dispatch(increment())}>Increase</button>
          <button onClick={()=> dispatch(reset())}>Reset</button>
          <button onClick={()=> dispatch(decrement())}>Decrease</button>
          <button onClick={()=> dispatch(incrementByAmount(10))}>Increase By 10</button>
        </div>
    );
};

export default CounterView;
```

This is the overall procedure of creating a Redux React App.