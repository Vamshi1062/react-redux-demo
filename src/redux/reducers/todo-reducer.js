import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initState=[]
export default (state=initState,action)=>{
     switch(action.type){
        case ADD_TODO:
            console.log('Adiing todo')
            return [...state,action.payload]
        case DELETE_TODO:
            const newState=state.filter(todo=>todo.id!==action.payload)
            return newState
        case UPDATE_TODO:
            const updateState=state.map(todo=>{
                if(todo.id===action.payload.todoId){
                    todo.title=action.payload.todo.title
                    todo.description=action.payload.todo.description
                }
                return todo
            })
            return updateState
        default:
            return state;
             
     }
}