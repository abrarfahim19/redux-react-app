import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/actions/toDoAction';

const Todo = () => {
    const { isLoading, todos, error } = useSelector((state) => (state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <div>
            <h3>The Todo List</h3>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos && todos.map(todo => {
                    return <h5 key={todo.id}>{todo.title}</h5>
                })}
            </section>
        </div>
    );
};

export default Todo;