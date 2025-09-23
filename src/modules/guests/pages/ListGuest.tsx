import type { GuestDTOResponse } from "../types/GuestDTOResponse";

export const ListGuest = ({
  guestDTOResponse,
  loadingData,
}: {
  guestDTOResponse: GuestDTOResponse | undefined;
  loadingData: boolean;
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
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
};
