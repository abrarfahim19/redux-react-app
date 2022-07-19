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