import { COMPLETE, DELETE_TODO, EDIT_TODO, GET_TODOS, NOT_COMPLETE, POST_TODO } from "../actionTypes/TodoTypes";

const initialState = {
    todos:[
        {
            id:Math.random(),
            text:"learn Redux",
            isComplete:false
        },
        {
            id:Math.random(),
            text:"learn React",
            isComplete:true
        },
        {
            id:Math.random(),
            text:"learn API...",
            isComplete:false
        }
    ]
}

const TodosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODOS:
            return {...state}
        case DELETE_TODO:
            return {...state,todos: state.todos.filter((el)=>el.id !== payload)}
        case POST_TODO:
            const newTodo = {
                id:Math.random(),
                text:payload,
                isComplete:false
            }
            return {...state,todos:[...state.todos, newTodo]};
        case EDIT_TODO:
            return {...state,todos:state.todos.map((el)=>el.id===payload.id?{...el,text:payload.data}:el)};
        case COMPLETE:
            return {...state,todos:state.todos.filter((el)=>el.isComplete === payload.data)};
        case NOT_COMPLETE:
            return {...state,todos:state.todos.filter((el)=>el.isComplete === payload.data)};
        default:
            return state;
    }
}

export default TodosReducer
