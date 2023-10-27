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
  const [completedTodos, setCompletedTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');



  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);

    };

    
  const handleNewDescription = (e) => {
    setNewDescription(e.target.value);
    

    };

    const handleAddTodo = () =>{
      if (newTitle.trim() === '' || newDescription.trim() === '') {
        setErrorMessage('Title and description cannot be empty!');
        return;
      }

      // Check if a todo with the same title and description already exists
  const isTaskDuplicate = allTodos.some(todo => todo.title === newTitle && todo.description === newDescription);

  if (isTaskDuplicate) {
    setErrorMessage('Task with the same title and description already exists!');
    return;
  }
    
      let newTodoItem ={
        title: newTitle,
        description: newDescription,
      }
  
      let updatedTodoarr = [...allTodos];
      updatedTodoarr.push(newTodoItem);
      setTodos(updatedTodoarr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoarr))
      setErrorMessage('');
  
    }
      // delete functionality
    const handleDeleteTodo = (index) => {
      let updatedTodoarr = [...allTodos];
      updatedTodoarr.splice(index, 1);
      setTodos(updatedTodoarr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoarr));
    };

    const handleCompletedTodo = (index) => {
      let now = new Date();
      let dd = now.getDate();
      let mm = now.getMonth() + 1;
      let yyyy = now.getFullYear();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      let completedOn =
        dd + '-' + mm + '-' + yyyy + ' at ' + hour + ':' + minute + ':' + second;
    
      let filteredItem = {
        ...allTodos[index],
        completedOn: completedOn
      };
    
      let updatedCompletedArr = [...completedTodos];
      updatedCompletedArr.push(filteredItem);
      setCompletedTodos(updatedCompletedArr);
      handleDeleteTodo(index);
      localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr))


    };
    
    useEffect(() => {
      let savedTodo = JSON.parse(localStorage.getItem('todolist'));
      if (savedTodo) {
        setTodos(savedTodo);
      }
  
      let savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')); // Corrected key
      if (savedCompletedTodos) {
        setCompletedTodos(savedCompletedTodos);
      }
  }, []);
  
      
  const handleDeleteCompletedTodo = (index) => {
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.splice(index, 1);
    setCompletedTodos(updatedCompletedArr);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

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
            <div className='error-message'>{errorMessage}</div>
          </div>
      


          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn' >Add</button>
          </div>
        </div>


        <div className='btn-area'>
        <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
        <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
      </div>
      { isCompleteScreen ===false && allTodos.map((item, index)=>{
        return(
          <div className='todo-list' key={index}>

          <div className='todo-list-item'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          </div>
          <div className='icons'>
           < AiOutlineDelete className='icon' title="delete" onClick={() => handleDeleteTodo(index)}/>
           < BsCheckLg className='check-icon' title="Complete" onClick={()=>handleCompletedTodo(index)} />
          </div>
        </div>
        )
      }
      )}

{ isCompleteScreen ===true && completedTodos.map((item, index)=>{
        return(
          <div className='todo-list' key={index}>

          <div className='todo-list-item'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><small>completed on:{item.completedOn}</small></p>
          </div>
          <div className='icons'>
           < AiOutlineDelete className='icon' title="delete" onClick={() => handleDeleteCompletedTodo(index)}/>
           
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
