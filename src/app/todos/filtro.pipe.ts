import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../filtro/filtro.model';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: Filter): any{

    switch (filtro.filterType) {
      case 'completed':
        return todos.filter(todo => todo.completado);
      case 'active':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
