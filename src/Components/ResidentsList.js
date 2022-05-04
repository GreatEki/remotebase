import React from "react";

function ResidentsList(props) {
  const { residentList } = props;
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>

      {residentList
        ? residentList.map((resident, index) => (
            <ul
              key={index}
              className="mt-10 styled w-50 mx-auto"
              data-testid="residentsNameList"
            >
              <li key="item1" className="slide-up-fade-in">
                {resident.studentName}
              </li>
            </ul>
          ))
        : null}
    </div>
  );
}

export default ResidentsList;
