import { useEffect, useState } from "react";
import { ListGuest } from "./ListGuest";
import { OptionsGuest } from "./OptionsGuest";
import { VisualitationGuest } from "./VisualitationGuest";
import type { GuestDTOResponse } from "../types/GuestDTOResponse";
import { getAllGuest } from "../services/allGuest";
import type { Page } from "../../commun/types/Page";

export const GuestDashboard = () => {
  const [guestDTOResponse, setGuestDTOResponse] = useState<
    GuestDTOResponse | undefined
  >(undefined);
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(false);

  const changePage = (pageNumber: number | undefined) => {
    const pageString = pageNumber ? `${pageNumber}` : "0";
    const page: Page = { page: pageString };
    callGetAllGuest(page);
  };

  const callGetAllGuest = async (page: Page) => {
    setIsLoadingGuestData(true);
    const [error, guestDTOResponse] = await getAllGuest(page);
    setIsLoadingGuestData(false);
    if (error) {
      return;
    }
    setGuestDTOResponse(guestDTOResponse);
  };

  useEffect(() => {
    if (isLoadingGuestData) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const pageString = params.get("page") ?? undefined;
    const size = params.get("size") ?? undefined;
    const page: Page = { page: pageString, size };
    callGetAllGuest(page);
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
          changePage={changePage}
        />
      </section>
    </>
  );
};
