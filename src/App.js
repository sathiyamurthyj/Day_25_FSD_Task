import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TodoList from './components/todoList';
import { useState } from 'react';
import Heading from './components/heading';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterSelect, setFilterSelect] = useState("all");
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [btnAdd,setBtnAdd] = useState("Add Todo");

  // handles add and update function
  const handleSubmit = (name,description) => {
    if(btnAdd==="Add Todo"){
      const todoItem = {
        name:name,
        description:description,
        id: Date.now(),
        status: "notCompleted"
      }
      const arr = [...todoList,todoItem];
      setTodoList(arr);
    } else if(btnAdd==="Edit Todo"){
      const updatedArr = todoList.map((todo)=>(
        todo.id===editId?{...todo,name:name,description:description}:todo
      ));
      setTodoList(updatedArr);
      setBtnAdd("Add Todo");
      setEditId(null);
    }
    setName("");
    setDescription("");
  };

  // handles the task complete/not complete status
  const handleStatus = (data) => {
    console.log(data);
    const todoItem = todoList.map((todo)=>todo.id === data.id?{...todo,status:data.status}:todo);
    setTodoList(todoItem);
  };

  // filter the tasks based on page filter status of all/completed/not completed
  const filteredList = todoList.filter((todo)=>{
    if(filterSelect==="all"){
      return todo;
    } else {
      return todo.status===filterSelect;
    }
  });
  
  // sets page filter selected option
  const handleFilter = (val) => {
      setFilterSelect(val);
  }

  // handles edit functionality of task
  const handleEdit = (id,name,description) => {
    setBtnAdd("Edit Todo");
    setName(name);
    setDescription(description);
    setEditId(id);
  };

  // handles delete functionality of task
  const handleDelete = (val) => {
    const newList = todoList.filter((todo)=>todo.id!==val);
    setTodoList(newList);
  };

  

  return (
    <>
    <Heading />
    <div className="container my-4">
      <form className="row g-4 mt-4 d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <input type="text" className="form-control border border-success" id="todoName" placeholder="Todo Name" value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <input type="text" className="form-control border border-success" id="todoDescription" placeholder="Todo Description" value={description} onChange={e=>setDescription(e.target.value)}/>
          </div>
          <div className="col-md-12 col-lg-3 d-flex justify-content-center">
              <button type="submit" className="btn w-75 btn-success mb-3 h-100" onClick={(e)=>{e.preventDefault();handleSubmit(name,description)}}>{btnAdd}</button>
          </div>
      </form>
    </div>
    <TodoList filteredList={filteredList} filterSelect={filterSelect} handleFilter={handleFilter} handleEdit={handleEdit} handleDelete={handleDelete} handleStatus={handleStatus} />
    </>
  
  );
}

export default App;
