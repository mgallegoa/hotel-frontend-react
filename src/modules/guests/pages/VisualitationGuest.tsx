import type { GuestDTO } from "../types/GestDTO";

export const VisualitationGuest = ({ guest }: { guest: GuestDTO }) => {
  return (
    <article className="card col-12 col-md-4">
      <div className="card-header">
        <h4>{guest.firstName}</h4>
      </div>
      <div className="card-body">
        <label>
          <strong>Name: </strong>
          <output name="Name">{guest.firstName}</output>
        </label>
        <label>
          <strong>Last Name: </strong>
          <output name="LastName">{guest.last_name}</output>
        </label>
        <label>
          <strong>Birth Day: </strong>
          <output name="BirthDay">{guest.birthDay}</output>
        </label>
        <label>
          <strong>Nationality: </strong>
          <output name="Nationality">{guest.nationality}</output>
        </label>
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
