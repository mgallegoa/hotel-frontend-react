import { useEffect, useState } from "react";
import type { GuestDTO } from "../types/GestDTO";

export const CreateEditGuest = ({ guest }: { guest: GuestDTO | undefined }) => {
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(true);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("id")) {
      console.log("loading data");
    } else {
      setIsLoadingGuestData(false);
    }
  }, []);

  return (
    <article className="mt-3 col-12">
      {isLoadingGuestData && <p>Loading data....</p>}
      {!isLoadingGuestData && (
        <form className="col-md-8 col-lg-6">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="nameHelp"
              value={guest ? guest.firstName : ""}
            />
            <div id="nameHelp" className="form-text">
              Enter the name of the Guest
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastNameInput" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastNameInput"
              aria-describedby="lastNameHelp"
              value={guest ? guest.last_name : ""}
            />
            <div id="lastNameHelp" className="form-text">
              Enter the last name of the Guest
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="birthDayInput" className="form-label">
              Birth Day:
            </label>
            <input
              type="text"
              className="form-control"
              id="birthDayInput"
              aria-describedby="birthDayHelp"
              value={guest ? guest.birthDay : ""}
            />
            <div id="birthDayHelp" className="form-text">
              Enter the birth day of the Guest
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="nationalityInput" className="form-label">
              Nationality:
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalityInput"
              aria-describedby="nationalityHelp"
              value={guest ? guest.nationality : ""}
            />
            <div id="nationalityHelp" className="form-text">
              Enter the nationality of the Guest
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="reservationsInput" className="form-label">
              Reservations:
            </label>
            <output name="ReservationsDto" id="reservationsInput">
              {!guest ||
                !guest.reservationsDto ||
                (guest.reservationsDto.length < 1 && <p>No Reservations</p>)}
              {guest &&
                guest.reservationsDto &&
                guest.reservationsDto.length > 0 && (
                  <ul>
                    {guest.reservationsDto.map((reservation) => {
                      return (
                        <li key={reservation.id}>
                          <p>
                            <strong>Date In: </strong>
                            {reservation.dateIn}
                          </p>
                          <p>
                            <strong>Date Out: </strong>
                            {reservation.dateOut}
                          </p>
                          <p>
                            <strong>Cost: </strong>
                            {reservation.costToPay}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
            </output>
          </div>
        </form>
      )}
    </article>
  );
};
