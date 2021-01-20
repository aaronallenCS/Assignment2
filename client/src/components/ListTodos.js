import React, {Fragment, useState, useEffect } from "react"; 


const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function 

    async function deleteTodo(id) 
    {
        try 
        {
            const res = await fetch('http://localhost:3000/todos/${id}', 
            {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch(err) 
        {
            console.error(err.message);
        }
    }




    async function getTodos() {
        const res = await fetch("http://localhost:3000/todos");

        const todoArray = await res.json(); 

        setTodos(todoArray);
    }
    useEffect(() => {
        getTodos();
    }, [])

    console.log(todos);

    return (
        <table class="table table-dark mt-5 ">
            <thead>
                <tr>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => (

                        <tr key = {todo.todo_id}>
                            <td>{todo.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ListTodos;