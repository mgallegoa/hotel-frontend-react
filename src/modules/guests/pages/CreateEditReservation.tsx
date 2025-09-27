import type { ReservationDTO } from "../../reservations/types/ReservationDTO";
import DeleteIcon from "../../../assets/delete-svgrepo-com.svg";
import UpdateIcon from "../../../assets/pen-square-svgrepo-com.svg";
import { useState, type MouseEvent } from "react";
import { MOCK_RESERVATION } from "../const/const";
import { toast } from "sonner";

export const CreateEditReservation = ({
  reservationsDto,
  addReservation,
  deleteReservation,
  updateReservation,
}: {
  reservationsDto: Array<ReservationDTO>;
  addReservation: (reservation: ReservationDTO) => void;
  deleteReservation: (reservation: ReservationDTO) => void;
  updateReservation: (reservation: ReservationDTO) => void;
}) => {
  const [reservation, setReservation] =
    useState<ReservationDTO>(MOCK_RESERVATION);

  const handleAddReservation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const existDateIn = reservationsDto.find(
      (res) => res.dateIn === reservation.dateIn,
    );
    if (existDateIn) {
      toast.error(
        `The reservation with the date ${reservation.dateIn} exist for the guest.`,
      );
      return;
    }
    addReservation(reservation);
    setReservation(() => MOCK_RESERVATION);
  };

  const handleDeleteReservation = (
    e: MouseEvent<HTMLImageElement>,
    reservation: ReservationDTO,
  ) => {
    e.preventDefault();
    deleteReservation(reservation);
  };

  const handleUpdateReservation = (
    e: MouseEvent<HTMLImageElement>,
    reservation: ReservationDTO,
  ) => {
    e.preventDefault();
    reservation.enableEdit = true;
    setReservation((prev) => ({ ...prev, reservation }));
  };
  const handleSaveEditedReservation = (
    e: MouseEvent<HTMLButtonElement>,
    reservation: ReservationDTO,
  ) => {
    e.preventDefault();
    updateReservation(reservation);
  };

  const returnRowReservationSee = (reservation: ReservationDTO) => {
    return (
      <tr key={reservation.id + reservation.dateIn}>
        <td scope="row">{reservation.dateIn}</td>
        <td>{reservation.dateOut}</td>
        <td>{reservation.costToPay}</td>
        <td>
          <img
            src={DeleteIcon}
            width={20}
            alt="delete"
            className="rounded-3 bg-danger-subtle grow-on-hover"
            onClick={(e) => handleDeleteReservation(e, reservation)}
          />
          <img
            src={UpdateIcon}
            width={20}
            alt="delete"
            className="rounded-3 bg-success-subtle grow-on-hover"
            onClick={(e) => handleUpdateReservation(e, reservation)}
          />
        </td>
      </tr>
    );
  };

  const returnRowReservationEdit = (reservation: ReservationDTO) => {
    return (
      <tr key={reservation.id + reservation.dateIn}>
        <td colSpan={4}>
          <table className="table mb-0">
            <tbody>
              <tr>
                <td className="p-0 mb-3">
                  <div className="row">
                    <div className="mb-1 ps-3 col-auto col-sm-4">
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={reservation.dateIn}
                        onChange={(e) => (reservation.dateIn = e.target.value)}
                      />
                    </div>
                    <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-4">
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={reservation.dateOut}
                        onChange={(e) => (reservation.dateOut = e.target.value)}
                      />
                    </div>
                    <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-2 pe-sm-1">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={reservation.costToPay}
                        onChange={(e) =>
                          (reservation.costToPay = e.target.value)
                        }
                      />
                    </div>
                    <div className="ps-3 ps-sm-1 col-auto col-md-2">
                      <button
                        className="btn btn-success"
                        onClick={(e) =>
                          handleSaveEditedReservation(e, reservation)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  };
  return (
    <div className="mb-3 border border-primary">
      <table className="table table-striped table-hover">
        <caption className="caption-top">Reservations:</caption>
        <thead>
          <tr className="table-primary">
            <th scope="col">Date In</th>
            <th scope="col">Date Out</th>
            <th scope="col">Cost</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {reservationsDto.length < 1 && (
            <tr>
              <td>
                <p>No Reservations</p>
              </td>
            </tr>
          )}
          {reservationsDto.length > 0 &&
            reservationsDto.map((reservation) => {
              if (reservation.enableEdit) {
                return returnRowReservationEdit(reservation);
              }
              return returnRowReservationSee(reservation);
            })}
        </tbody>
      </table>
      <div className="mb-3 mt-2 pe-0">
        <div className="row">
          <div className="mb-1 ps-3 col-auto col-sm-4">
            <input
              type="date"
              className="form-control"
              placeholder="Date In"
              onChange={(e) => (reservation.dateIn = e.target.value)}
            />
          </div>
          <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-4">
            <input
              type="date"
              className="form-control"
              placeholder="Date Out"
              onChange={(e) => (reservation.dateOut = e.target.value)}
            />
          </div>

          <div className="mb-1 ps-3 ps-sm-1 col-auto col-sm-2 pe-sm-1">
            <input
              type="number"
              className="form-control pe-sm-0"
              placeholder="Cost"
              onChange={(e) => (reservation.costToPay = e.target.value)}
            />
          </div>
          <div className="ps-3 ps-sm-1 col-auto col-md-2">
            <button className="btn btn-success" onClick={handleAddReservation}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
