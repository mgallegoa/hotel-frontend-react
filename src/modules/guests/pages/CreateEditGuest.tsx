import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { GuestDTO } from "../types/GestDTO";
import { getGuestService } from "../services/allGuest";
import { MOCK_GUEST } from "../const/const";
import { useParams } from "react-router";
import { createEditGuest } from "../services/createEditGuest";
import { toast } from "sonner";
import type { ReservationDTO } from "../../reservations/types/ReservationDTO";
import { CreateEditReservation } from "./CreateEditReservation";

export const CreateEditGuest = () => {
  const [isLoadingGuestData, setIsLoadingGuestData] = useState<boolean>(false);
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

  const addReservation = (reservation: ReservationDTO) => {
    setGuest((prev) => ({
      ...prev,
      reservationsDto: [...prev.reservationsDto, { ...reservation }],
    }));
  };

  const deleteReservation = (reservation: ReservationDTO) => {
    setGuest((prev) => ({
      ...prev,
      reservationsDto: prev.reservationsDto.filter(
        (r) => r.id != reservation.id && r.dateIn != reservation.dateIn,
      ),
    }));
  };

  const updateReservation = (reservation: ReservationDTO) => {
    reservation.enableEdit = false;
    setGuest((prev) => ({
      ...prev,
      reservationsDto: prev.reservationsDto.map((r) =>
        r.id != reservation.id && r.dateIn != reservation.dateIn
          ? { ...r, reservation }
          : r,
      ),
    }));
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
    if (isLoadingGuestData) {
      return;
    }
    const idNumber = parseInt(params.id ?? "NaN");
    if (!isNaN(idNumber)) {
      getGuest(idNumber);
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
          {guest && guest.reservationsDto && (
            <CreateEditReservation
              reservationsDto={guest.reservationsDto}
              addReservation={addReservation}
              deleteReservation={deleteReservation}
              updateReservation={updateReservation}
            />
          )}
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      )}
    </article>
  );
};
