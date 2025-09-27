import { Link } from "react-router";
import type { GuestDTO } from "../types/GestDTO";

interface Props {
  guest: GuestDTO;
}

export const VisualitationGuest: React.FC<Props> = ({ guest }) => {
  return (
    <article className="card col-12 col-md-4">
      <div className="card-header d-inline-flex justify-content-between align-items-center">
        <strong>{guest.firstName}</strong>
        <Link
          className={
            guest.id === null || guest.id < 1
              ? "btn btn-primary disabled"
              : "btn btn-primary"
          }
          to={`guest/edit/${guest.id}`}
        >
          Edit Guest
        </Link>
      </div>
      <div className="card-body">
        <label>
          <strong>Name: </strong>
          <output name="Name">{guest.firstName}</output>
        </label>
        <br />
        <label>
          <strong>Last Name: </strong>
          <output name="LastName">{guest.last_name}</output>
        </label>
        <br />
        <label>
          <strong>Birth Day: </strong>
          <output name="BirthDay">{guest.birthDay}</output>
        </label>
        <br />
        <label>
          <strong>Nationality: </strong>
          <output name="Nationality">{guest.nationality}</output>
        </label>
        <br />
        <label>
          <strong>Reservations: </strong>
          <output name="ReservationsDto">
            {!guest.reservationsDto ||
              (guest.reservationsDto.length < 1 && <p>No Reservations</p>)}
            {guest.reservationsDto && guest.reservationsDto.length > 0 && (
              <ol>
                {guest.reservationsDto.map((reservation) => {
                  return (
                    <li key={reservation.id}>
                      <strong>Date In: </strong>
                      {reservation.dateIn}
                      <strong> Date Out: </strong>
                      {reservation.dateOut}
                      <strong> Cost: </strong>
                      {reservation.costToPay}
                    </li>
                  );
                })}
              </ol>
            )}
          </output>
        </label>
      </div>
    </article>
  );
};
