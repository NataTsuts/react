import React, {useState, useEffect} from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

declare let confirm: (question: string) => boolean

const App: React.FunctionComponent = () => {
  const frontStorage = localStorage.getItem('todos') || '[]'
  console.log(frontStorage)
  const saved = JSON.parse ( frontStorage ) as ITodo[]

  const [todos, setTodos] = useState<ITodo[]> (saved)


  useEffect(() => {
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(localStorage.getItem('todos'))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = ( id: number) => {
    setTodos(prev => 
      prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
   
  const removeHandler = ( id: number) => {
    const shouldRemove = confirm 
      ('Ви упевнені, що хочете видалити елемент?')
    if (shouldRemove) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return <>
     <Navbar />
     <div className='container'>
       < TodoForm onAdd={addHandler}/>

       <TodoList 
       todos = {todos}
       onToggle = {toggleHandler}
       onRemove = {removeHandler}/>
     </div>
  </> 
}

export default App;
