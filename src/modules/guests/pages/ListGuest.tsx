import { Link } from "react-router";
import type { GuestDTOResponse } from "../types/GuestDTOResponse";

export const ListGuest = ({
  guestDTOResponse,
  loadingData,
  changePage,
}: {
  guestDTOResponse: GuestDTOResponse | undefined;
  loadingData: boolean;
  changePage: (page: number | undefined) => void;
}) => {
  return (
    <article className="col-12 col-md-8 table-responsive">
      <table className="table table-striped table-hover">
        <caption className="caption-top">List of Guest</caption>
        <thead>
          <tr className="table-primary">
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birth Day</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {loadingData && (
            <tr>
              <td scope="row">Loading...</td>
            </tr>
          )}
          {!loadingData &&
            guestDTOResponse?.content &&
            guestDTOResponse?.content?.length < 1 && (
              <tr>
                <td scope="row">No Guest found</td>
              </tr>
            )}
          {!loadingData &&
            guestDTOResponse?.content &&
            guestDTOResponse?.content.length > 0 &&
            guestDTOResponse.content.map((guest) => {
              return (
                <tr key={guest.id}>
                  <td scope="row">{guest.id}</td>
                  <td>{guest.firstName}</td>
                  <td>{guest.last_name}</td>
                  <td>{guest.birthDay}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul
          className={
            guestDTOResponse?.empty
              ? "pagination justify-content-center disabled"
              : "pagination justify-content-center"
          }
        >
          <li
            className={
              guestDTOResponse?.first ? "page-item disabled" : "page-item"
            }
          >
            <Link
              className="page-link"
              to={`/?page=${guestDTOResponse && guestDTOResponse.number > 1 ? guestDTOResponse.number - 1 : 1}`}
              onClick={() =>
                changePage(guestDTOResponse ? guestDTOResponse.number - 1 : 1)
              }
            >
              Previous
            </Link>
          </li>
          <li
            className={
              guestDTOResponse?.first ? "page-item disabled" : "page-item"
            }
          >
            <Link
              className="page-link"
              to={`/?page=${guestDTOResponse ? guestDTOResponse.number + 1 : 1}`}
              onClick={() =>
                changePage(guestDTOResponse ? guestDTOResponse.number + 1 : 1)
              }
            >
              {guestDTOResponse === undefined ||
              guestDTOResponse?.number === undefined
                ? 1
                : guestDTOResponse.number + 1}
            </Link>
          </li>
          <li
            className={
              guestDTOResponse?.last ? "page-item disabled" : "page-item"
            }
          >
            <Link
              className="page-link"
              to={`/?page=${guestDTOResponse ? guestDTOResponse.number + 2 : 2}`}
              onClick={() =>
                changePage(guestDTOResponse ? guestDTOResponse.number + 2 : 2)
              }
            >
              {guestDTOResponse === undefined ||
              guestDTOResponse?.number === undefined
                ? 2
                : guestDTOResponse.number + 2}
            </Link>
          </li>
          <li
            className={
              guestDTOResponse?.last ? "page-item disabled" : "page-item"
            }
          >
            <Link
              className="page-link"
              to={`/?page=${guestDTOResponse ? guestDTOResponse.number + 3 : 3}`}
              onClick={() =>
                changePage(guestDTOResponse ? guestDTOResponse.number + 3 : 3)
              }
            >
              {guestDTOResponse === undefined ||
              guestDTOResponse?.number === undefined
                ? 3
                : guestDTOResponse.number + 3}
            </Link>
          </li>
          <li
            className={
              guestDTOResponse?.last ? "page-item disabled" : "page-item"
            }
          >
            <Link
              className="page-link"
              to={`/?page=${guestDTOResponse ? guestDTOResponse.number + 4 : 4}`}
              onClick={() =>
                changePage(guestDTOResponse ? guestDTOResponse.number + 4 : 4)
              }
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};
