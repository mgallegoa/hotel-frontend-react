import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { GuestDTO } from "../types/GestDTO";
import { getGuestService } from "../services/allGuest";
import { MOCK_GUEST } from "../const/const";
import { useParams } from "react-router";
import { createEditGuest } from "../services/createEditGuest";

export const CreateEditGuest = () => {
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(true);
  const [guest, setGuest] = useState<GuestDTO>(() => {
    const guest = MOCK_GUEST;
    guest.firstName = "";
    guest.last_name = "";
    return guest;
  });
  const params = useParams();

  const getGuest = async (id: number) => {
    setIsLoadingGuestData(true);
    const [error, result] = await getGuestService(id);
    setIsLoadingGuestData(false);
    if (error) {
      return;
    }
    if (!result) {
      return;
    }
    setGuest(result);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [error, guestDTOResponse] = await createEditGuest(guest.id, guest);
    if (error) {
      return;
    }
    if (!guestDTOResponse) {
      return;
    }
    setGuest(guestDTOResponse);
  };
  useEffect(() => {
    const idNumber = parseInt(params.id ?? "NaN");
    if (!isNaN(idNumber)) {
      getGuest(idNumber);
    } else {
      setIsLoadingGuestData(false);
    }
  }, []);

  return (
    <article className="mt-3 col-12">
      {isLoadingGuestData && <p>Loading data....</p>}
      {!isLoadingGuestData && (
        <form className="col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="nameHelp"
              name="firstName"
              value={guest ? guest.firstName : ""}
              onChange={handleChange}
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
              name="last_name"
              value={guest ? guest.last_name : ""}
              onChange={handleChange}
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
              name="birthDay"
              value={guest ? guest.birthDay : ""}
              onChange={handleChange}
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
              name="nationality"
              value={guest ? guest.nationality : ""}
              onChange={handleChange}
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
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      )}
    </article>
  );
};
