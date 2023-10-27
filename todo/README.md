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


    IMPLEMENT TASK COMPLETED FUNCTIONALITY
  
1.create handleCompleteTodo function:
2.Accept index as a parameter.
3.Get the current date and time.
4.Create a new object with the completed todo's properties and completedOn timestamp.
5.Create a copy of completedTodos array.
6.Add the new completed todo object to the completedTodos array.
7.Call handleDeleteTodo to remove the completed todo from allTodos.
8.Update completedTodos state with the modified array.
9.Update local storage with the modified completedTodos.


 Deleting a Completed Todo:
1.create handleDeleteCompletedTodo function:
2.Accept index as a parameter.
3.Create a copy of completedTodos array.
5.Remove the completed todo at the given index.
6.Update completedTodos state with the modified array.
7.Update local storage with the modified completedTodos.


Error Handling:
Display an error message if the user attempts to add a todo with an empty title or description.
Clear the error message when a valid todo is added.