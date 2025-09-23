import type { ReservationDTO } from "../../reservations/types/ReservationDTO";

export type GuestDTO = {
  id: number;
  firstName: string;
  last_name: string;
  birthDay: string;
  nationality: string;
  reservationsDto: Array<ReservationDTO>;
};
