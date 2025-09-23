import type { Pageable } from "../../commun/types/Pageable";
import type { Sort } from "../../commun/types/Sort";
import type { GuestDTO } from "./GestDTO";

export type GuestDTOResponse = {
  content: Array<GuestDTO>;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
