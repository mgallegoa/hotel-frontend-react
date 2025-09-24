import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import type { GuestDTO } from "../types/GestDTO";
import { getGuestService } from "../services/allGuest";
import { MOCK_GUEST, MOCK_RESERVATION } from "../const/const";
import { useParams } from "react-router";
import { createEditGuest } from "../services/createEditGuest";
import { toast } from "sonner";
import type { ReservationDTO } from "../../reservations/types/ReservationDTO";

export const CreateEditGuest = () => {
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(true);
  const [guest, setGuest] = useState<GuestDTO>(() => {
    const guest = MOCK_GUEST;
    guest.firstName = "";
    guest.last_name = "";
    return guest;
  });
  const [reservation, setReservation] =
    useState<ReservationDTO>(MOCK_RESERVATION);
  const params = useParams();

  const getGuest = async (id: number) => {
    setIsLoadingGuestData(true);
    const [error, result] = await getGuestService(id);
    setIsLoadingGuestData(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Data loaded.");
    if (!result) {
      return;
    }
    setGuest(result);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuest((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReservation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    guest.reservationsDto.push(reservation);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [error, guestDTOResponse] = await createEditGuest(guest.id, guest);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Data saved succefully.");
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
        <form className="col-md-9 col-lg-7" onSubmit={handleSubmit}>
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
              Enter the birth day of the Guest, max 8 numbers
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
          <div className="mb-3 border border-primary">
            <label htmlFor="reservationsInput" className="form-label">
              Reservations:
            </label>
            {!guest ||
              !guest.reservationsDto ||
              (guest.reservationsDto.length < 1 && <p>No Reservations</p>)}
            {guest &&
              guest.reservationsDto &&
              guest.reservationsDto.length > 0 && (
                <ul className="list-group">
                  {guest.reservationsDto.map((reservation) => {
                    return (
                      <li
                        key={reservation.id}
                        className="list-group-item list-group-item-action"
                      >
                        <strong>Date In: </strong>
                        {reservation.dateIn}
                        <strong>Date Out: </strong>
                        {reservation.dateOut}
                        <strong>Cost: </strong>
                        {reservation.costToPay}
                      </li>
                    );
                  })}
                </ul>
              )}
            <div className="row mb-3 mt-2 pe-0">
              <div className="mb-1 ps-3 col-auto col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date In"
                  onChange={(e) => (reservation.dateIn = e.target.value)}
                />
              </div>
              <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date Out"
                  onChange={(e) => (reservation.dateOut = e.target.value)}
                />
              </div>

              <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost"
                  onChange={(e) => (reservation.costToPay = e.target.value)}
                />
              </div>
              <div className="ps-3 ps-sm-1 col-auto col-md-2">
                <button
                  className="btn btn-success"
                  onClick={handleAddReservation}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      )}
    </article>
  );
};
