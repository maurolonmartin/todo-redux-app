import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';
 
export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Darle el remedio a Hulk'),
  new Todo('Comprar la carne'),
  new Todo('Robar escudo')
];
 
const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, {texto}) => [...state, new Todo( texto )]),
  on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(actions.toggle, (state, {id}) => {
    return state.map( todo => {
      if ( todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.toogleAll, (state, {completado}) => state.map( todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  ),
  on(actions.limpiarCompletados, state => state.filter( todo => !todo.completado))
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}