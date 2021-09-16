import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { ShowTodos } from './ShowTodos'
import axios from 'axios';

export function TodoInput({ text, setText, todoList, setTodoList }) {
    
    const payload = {
        status: false,
        title: text,
        id: nanoid(3)
    }

    const todoApi = axios.create({
        baseURL:"http://localhost:3001"
    })

    const handleChange = (e) => {
        
        setText(e.target.value);

    }

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        
        const res = await todoApi.get("Todos");

        setTodoList(res.data);
            
    }

    const handleClick = async (e) => {
        
        const res = await todoApi.post("Todos", payload);
        getTodos();
        setText("")
    }

    return <div>
        <h1>Todo List</h1>
        <input value={text} onChange={handleChange} type="text" placeholder="Enter Task" />
        <button onClick={handleClick}>Add Task</button>
        <ShowTodos todoList={todoList} getTodos={getTodos}/>
    </div>
}