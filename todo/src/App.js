import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
import './App.css';
import './components/CSS/style.css'

function App() {
  return (
    <>
<h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' name='title' placeholder="What is the  task title?" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' name='title'  placeholder="What's the task description?" />
          </div>

          <div className='todo-input-item'>
            <button type='button' className='primaryBtn' >Add</button>
          </div>
        </div>


      <div className='btn-area'>
        <button >Todo</button>
        <button  >Completed</button>
      </div>

  

 
          <div className='todo-list' >

          <div className='todo-list-item'>
          <h3>todo title</h3>
          <p>todo description</p>
          </div>
          <div className='icons'>
           < AiOutlineDelete className='icon' />
           < BsCheckLg className='check-icon' />
          </div>
        </div>
        
    
   
      </div>
 
    </>
  );
}

export default App;
