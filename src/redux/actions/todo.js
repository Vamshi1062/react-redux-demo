import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

//add to do action
export const addTodo=todo=>({
       type:ADD_TODO,
       payload:todo
})
//delete to do 
export const deleteTodo=id=>({
        type:DELETE_TODO,
        payload:id
})
//update todo
export const updateTodo=(todo,id)=>({
    type:UPDATE_TODO,
    payload:{todo:todo,todoId:id}
})