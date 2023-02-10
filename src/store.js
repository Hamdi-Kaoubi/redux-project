import TodosReducer from "./reducer/TodosReducer";
import { createStore } from "redux";
const store = createStore(
    TodosReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store