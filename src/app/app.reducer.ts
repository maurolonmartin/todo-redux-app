import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { Filter } from "./filtro/filtro.model";


export interface AppState {
    todos: Todo[],
    filterType: Filter

}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filterType: filterReducer
}