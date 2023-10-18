import { useEffect, useState } from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
import './App.css';
import './components/CSS/style.css'

function App() {
  const[isCompleteScreen, setIsCompleteScreen] = useState(false)
  const[allTodos, setTodos] = useState([])
  const[newTitle, setNewTitle] = useState("")
  const[newDescription, setNewDescription] = useState("")


  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);

    };

    
  const handleNewDescription = (e) => {
    setNewDescription(e.target.value);
    

    };

    const handleAddTodo = () =>{
      let newTodoItem ={
        title: newTitle,
        description: newDescription,
      }
  
      let updatedTodoarr = [...allTodos];
      updatedTodoarr.push(newTodoItem);
      setTodos(updatedTodoarr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoarr))
  
    }
      // delete functionality
    const handleDeleteTodo = (index) => {
      let updatedTodoarr = [...allTodos];
      updatedTodoarr.splice(index, 1);
      setTodos(updatedTodoarr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoarr));
    };

    useEffect(()=>{
      let savedTodo = JSON.parse(localStorage.getItem('todolist'));
      if(savedTodo){
        setTodos(savedTodo);
      }
        },[])

      


  return (
    <>
<h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' name='title' value={newTitle} onChange={handleNewTitle} placeholder="What is the  task title?" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' name='title' value={newDescription} onChange={handleNewDescription } placeholder="What's the task description?" />
          </div>

          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn' >Add</button>
          </div>
        </div>


        <div className='btn-area'>
        <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
        <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
      </div>


  

 
      {allTodos.map((item, index)=>{
        return(
          <div className='todo-list' key={index}>

          <div className='todo-list-item'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          </div>
          <div className='icons'>
           < AiOutlineDelete className='icon' onClick={() => handleDeleteTodo(index)}/>
           < BsCheckLg className='check-icon' title="Complete" />
          </div>
        </div>
        )
      }
      )}
    
   
      </div>
 
    </>
  );
}

export default App;
