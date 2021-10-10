import { createAction, props } from "@ngrx/store";
import { Filter } from "./filtro.model";

export const setFilter = createAction('[Filter] Set filter', 
props<{ filterType: Filter }>());
