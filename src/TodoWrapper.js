import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Reminders } from './Reminders';
import { v4 as uuidv4 } from 'uuid'; 
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { PomodoroTimer } from './PomodoroTimer';
import './Form.css';


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos)
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, task, isEditing: !todo.isEditing} : todo))
    }
    

    return (
        <div>
            <div className='wrapAround' >
            <h1 className='headerText'>To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo}/>
                )  
            ))}
            </div>
            
            <div className='wrapAround'>
            <h1 className='headerText'>Reminders</h1>
             <Reminders />
             </div>

             <div className='wrapAround'>
             <h1 className='headerText'> Pomodoro Timer</h1>
             <PomodoroTimer seconds={15} />
             </div>
        </div>
    );
};
