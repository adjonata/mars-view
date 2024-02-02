export interface Pagination<T = unknown[], TFilters = Record<string, unknown>> {
  page?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  filters?: TFilters;
  items?: T;
  itemsCount?: number;
}
