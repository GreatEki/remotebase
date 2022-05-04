import React from "react";

function Error(props) {
  return (
    <div>
      {props.errMsg && (
        <div
          data-testid="errorMsg"
          className="alert error mt-20 slide-up-fade-in"
        >
          {" "}
          {props.errMsg}
        </div>
      )}
    </div>
  );
}

export default Error;
