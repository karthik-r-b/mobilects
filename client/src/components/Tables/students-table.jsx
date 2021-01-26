import React from 'react';

const StudentsTable = () => {
  return (
    <React.Fragment>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Sid</th>
              <th scope="col">Name</th>
              <th scope="col">branch</th>
              <th scope="col">semester</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jacob</td>
              <td>CSE</td>
              <td>1</td>
              <td className="mr-3">
                <button className="btn btn-success btn-sm mr-3">Edit</button>
                &nbsp; &nbsp;
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Henry</td>
              <td>ECE</td>
              <td>2</td>
              <td className="mr-3">
                <button className="btn btn-success btn-sm mr-3">Edit</button>
                &nbsp; &nbsp;
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Michael</td>
              <td>ECE</td>
              <td>3</td>
              <td className="mr-3">
                <button className="btn btn-success btn-sm mr-3">Edit</button>
                &nbsp; &nbsp;
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default StudentsTable;
