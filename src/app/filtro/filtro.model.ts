export type FILTER = 'all' | 'active' | 'completed' | 'clear completed';
 
export type Filter = {
  filterType: FILTER;
}