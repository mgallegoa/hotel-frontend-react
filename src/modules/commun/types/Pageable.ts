import type { Sort } from "./Sort";

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
};
