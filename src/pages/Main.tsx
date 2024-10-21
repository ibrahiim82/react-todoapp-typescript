import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import axios from "axios";
import TodoList from "../components/TodoList";

// interface ITodoType {
//     task:string;
//     isDone:boolean;
//     id:string | number; //* id değeri string ya da number olabilir
//     owner?: string //! bu alan zorunlu değil, optional. Eğer varsa da type'ı string
// }

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
//   const [todos, setTodos] = useState([] as ITodoType[]);
//   const [todos, setTodos] = useState<Array<ITodoType>> ([]);
  const [todos, setTodos] = useState<ITodoType[]> ([]); //* yaygın olan kullanım
  console.log(todos)

  const getTodos = async()=>{
    try {
        const {data} = await axios(url)
        // const {data} = await axios<ITodoType[]>(url)
        setTodos(data)
    } catch (error) {
        console.log(error)
    }
  }

  //* 1. yol
//   const addTodo = async(task:string)=>{
//     try {
//         await axios.post(url,{task,isDone:false})
//     } catch (error) {
//         console.log(error)
//     }
//   }

//* 2.yol
type AddFn= (task:string) => Promise<void>
  const addTodo:AddFn = async(task:string)=>{
    try {
        await axios.post(url,{task,isDone:false})
        getTodos()
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
};

export default Main;
