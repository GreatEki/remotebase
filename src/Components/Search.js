import React from "react";

function Search(props) {
  const { handleInput, residentDirectory, addNewResident } = props;
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            name="studentName"
            value={residentDirectory.studentName}
            onChange={handleInput}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            name="joiningDate"
            onChange={handleInput}
            value={residentDirectory.joiningDate}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => addNewResident(residentDirectory)}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
