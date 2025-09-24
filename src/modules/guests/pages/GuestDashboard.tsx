import { useEffect, useState } from "react";
import { ListGuest } from "./ListGuest";
import { OptionsGuest } from "./OptionsGuest";
import { VisualitationGuest } from "./VisualitationGuest";
import type { GuestDTOResponse } from "../types/GuestDTOResponse";
import { getAllGuest } from "../services/allGuest";
import type { Page } from "../../commun/types/Page";
import type { GuestDTO } from "../types/GestDTO";
import { MOCK_GUEST } from "../const/const";
import { toast } from "sonner";

export const GuestDashboard = () => {
  const [guestDTOResponse, setGuestDTOResponse] = useState<
    GuestDTOResponse | undefined
  >(undefined);
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(false);
  const [guest, setGuest] = useState<GuestDTO>(MOCK_GUEST);

  const selectedGuest = (guest: GuestDTO) => {
    setGuest(guest);
  };

  const changePage = (pageNumber: number | undefined) => {
    const pageString = `${pageNumber}`;
    const page: Page = { page: pageString };
    callGetAllGuest(page);
  };

  const callGetAllGuest = async (page: Page) => {
    setIsLoadingGuestData(true);
    const pageString = page.page ?? "1";
    const pageNumber = parseInt(pageString) - 1;
    page.page = pageNumber.toString();
    const [error, guestDTOResponse] = await getAllGuest(page);
    setIsLoadingGuestData(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Data loaded.");
    setGuestDTOResponse(guestDTOResponse);
  };

  useEffect(() => {
    if (isLoadingGuestData) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const pageString = params.get("page") ?? "1";
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
        <VisualitationGuest guest={guest} />
        <ListGuest
          guestDTOResponse={guestDTOResponse}
          loadingData={isLoadingGuestData}
          changePage={changePage}
          selectedGuest={selectedGuest}
        />
      </section>
    </>
  );
};
