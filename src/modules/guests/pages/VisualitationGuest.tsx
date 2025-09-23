import { Link } from "react-router";
import type { GuestDTO } from "../types/GestDTO";

export const VisualitationGuest = ({ guest }: { guest: GuestDTO }) => {
  return (
    <article className="card col-12 col-md-4">
      <div className="card-header d-inline-flex justify-content-between align-items-center">
        <strong>{guest.firstName}</strong>
        <Link className="btn btn-primary" to={`guest/edit/${guest.id}`}>
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
        </label>
      </div>
    </article>
  );
};
