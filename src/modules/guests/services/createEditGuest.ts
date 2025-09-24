import type { GuestDTO } from "../types/GestDTO";

export const createEditGuest = async (
  id: number | null,
  guest: GuestDTO,
): Promise<[Error?, GuestDTO?]> => {
  try {
    let urlToFetch = `http://localhost:8081/api/v1/guests`;
    let method = "POST";
    let action = "creating";

    if (id && id > 0) {
      //Edit
      urlToFetch = `http://localhost:8081/api/v1/guests/edit/${id}`;
      method = "PUT";
      action = "updating";
    }
    const response = await fetch(urlToFetch, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });
    if (!response.ok) {
      return [
        new Error(
          `Error ${action} the guest, please check the data` +
            response.statusText,
        ),
      ];
    }
    const guestDTOResponse = (await response.json()) as GuestDTO;
    return [undefined, guestDTOResponse];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }
  return [new Error("Unknow Error")];
};
