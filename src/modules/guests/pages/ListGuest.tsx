export const ListGuest = () => {
  return (
    <article className="col-12 col-md-8 table-responsive">
      <table className="table table-striped table-hover">
        <caption className="caption-top">List of Guest</caption>
        <thead>
          <tr className="table-primary">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Long description</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td scope="row">1</td>
            <td>Manuel</td>
            <td>
              This is a long description, and the main goal is to check the
              breackpoints in responsive design, with this we check if the table
              cut or the behavior of it
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Fernando</td>
            <td>
              ThisIsAlongdescription,andthemaingoalistocheckthebreackpointinresponsivedesign,withthiswecheckifthetablecutorthebehaviorofit
            </td>
          </tr>
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
