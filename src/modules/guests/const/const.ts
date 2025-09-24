import type { ReservationDTO } from "../../reservations/types/ReservationDTO";
import type { GuestDTO } from "../types/GestDTO";

export const MOCK_GUEST: GuestDTO = {
  id: null,
  firstName: "Select a Guest",
  last_name: "Select a Guest",
  birthDay: "",
  nationality: "",
  reservationsDto: [],
};

export const MOCK_RESERVATION: ReservationDTO = {
  id: null,
  dateIn: "",
  dateOut: "",
  costToPay: "0",
};
