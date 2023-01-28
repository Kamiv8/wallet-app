export interface PageResult<T> {
  pageNumber: number;
  pageSize: number;
  count: number;
  totalPages: number;
  items: T[];
}
