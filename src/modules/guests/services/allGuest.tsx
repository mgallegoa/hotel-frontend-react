import type { GuestDTOResponse } from "../types/GuestDTOResponse";

export const getAllGuest = async (): Promise<[Error?, GuestDTOResponse?]> => {
  try {
    const response = await fetch(
      `http://localhost:8081/api/v1/guests/pageable?size=10&page=0`,
    );
    if (!response.ok) {
      return [new Error("Error searching guest" + response.statusText)];
    }
    const guestDTOResponse = (await response.json()) as GuestDTOResponse;
    return [undefined, guestDTOResponse];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }
  return [new Error("Unknow Error")];
};
