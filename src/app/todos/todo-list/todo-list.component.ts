import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Filter } from 'src/app/filtro/filtro.model';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: Filter;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe( ({todos, filterType}) => {
      this.todos = todos;
      this.filtroActual = filterType;
    });

  }

}
