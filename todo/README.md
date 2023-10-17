This is to do app 

<!-- steps -->
Getting Started and Building Structure of Todo App

Styling Our Todo App Part 1

Styling Our Todo App Part 2


Adding Todo Task Into List 

Deleting Todo List Items

Adding Complete Tab for Todo App

Finishing the Complete Tab in todo App


Getting Started and Building Structure of Todo App
create new branch to and create the html structure and css styles

16/10/2023
Today we will be working on adding adding todo tasks into list
step 1
#import the useState and the useEffect 

import { useEffect, useState } from 'react';

#step 2 define the state variables

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
      localStorage.setItem('todolist', JSON.stringify(updatedTodoarr) )
      console.log(allTodos)
    }