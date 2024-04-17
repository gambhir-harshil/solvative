import { useState } from "react";
import Spinner from "./Spiner";

const Table = ({ loading, data, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const changePage = (pageumber) => {
    setCurrentPage(pageumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const currentData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={3}>
                <Spinner />
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="3">Error: {error}</td>
            </tr>
          )}
          {currentData?.map((country, index) => (
            <tr key={country.cca3}>
              <td>{index + 1}</td>
              <td>{country.name.common}</td>
              <td>{country.flag}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 0 && (
        <div className="pagination-wrapper">
          <button onClick={() => changePage(1)} disabled={currentPage === 1}>
            First
          </button>
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            onClick={() => changePage(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      )}
    </>
  );
};

export default Table;
