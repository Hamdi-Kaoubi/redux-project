import { COMPLETE, DELETE_TODO, EDIT_TODO, GET_TODOS, NOT_COMPLETE, POST_TODO } from "../actionTypes/TodoTypes"

export const get_todo = () => {
    return {type:GET_TODOS};
};
export const delete_todo = (id) => {
    return {type:DELETE_TODO, payload:id};
};
export const post_todo = (data) => {
    return {type:POST_TODO, payload:data};
};
export const edit_todo = (id,data) => {
    return {type:EDIT_TODO, payload:{id,data}};
};
export const  complete = (data) => {
    return {type:COMPLETE, payload:{data}};
};
export const  not_complete = (data) => {
    return {type:NOT_COMPLETE, payload:{data}};
};