import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from 'src/app/filtro/filtro.actions';
import { Filter } from 'src/app/filtro/filtro.model';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: Filter = {
    filterType: 'completed'
  }
  filters: Filter[] = [{filterType: 'all'}, {filterType: 'completed'}, 
    {filterType: 'active'}, ];

  pendientes: number = 0;
 
  constructor(private storeSvc: Store<AppState>) {
  }

  ngOnInit(): void {
    this.storeSvc.subscribe( state => {
      this.currentFilter = state.filterType;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });
  }
 
  onSetFilter(filter: Filter) {
    this.currentFilter = filter;
    this.storeSvc.dispatch(setFilter({filterType: this.currentFilter}));
  }

  limpiarCompletados( ) {
    this.storeSvc.dispatch(limpiarCompletados());
  }
 
}
