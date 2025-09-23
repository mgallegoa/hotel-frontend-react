import { useEffect, useState } from "react";
import { ListGuest } from "./ListGuest";
import { OptionsGuest } from "./OptionsGuest";
import { VisualitationGuest } from "./VisualitationGuest";
import type { GuestDTOResponse } from "../types/GuestDTOResponse";
import { getAllGuest } from "../services/allGuest";

export const GuestDashboard = () => {
  const [guestDTOResponse, setGuestDTOResponse] = useState<
    GuestDTOResponse | undefined
  >(undefined);
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(false);

  useEffect(() => {
    if (isLoadingGuestData) {
      return;
    }
    setIsLoadingGuestData(true);
    getAllGuest()
      .then((response) => {
        const [error, guestDTOResponse] = response;
        if (error) {
          return;
        }
        setGuestDTOResponse(guestDTOResponse);
      })
      .finally(() => {
        setIsLoadingGuestData(false);
      });
  }, []);

  return (
    <>
      <header className="row pt-4">
        <OptionsGuest />
      </header>
      <section className="row pt-3">
        <VisualitationGuest />
        <ListGuest
          guestDTOResponse={guestDTOResponse}
          loadingData={isLoadingGuestData}
        />
      </section>
    </>
  );
};
