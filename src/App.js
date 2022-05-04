import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { v4 as uuidv4 } from "uuid";
import { studentList } from "./constants/StudentList";

const title = "Hacker Dormitory";
function App() {
  const [residentDirectory, setResidentDirectory] = useState({
    id: "",
    studentName: "",
    joiningDate: "",
    validityDate: "",
  });

  const [residentList, setResidentList] = useState([]);

  const [errMsg, setErrMsg] = useState(null);

  function handleInput(evt) {
    const { name, value } = evt.target;
    setResidentDirectory((prev) => ({ ...prev, [name]: value }));
  }

  function validateStudentRecord(studentName) {
    const isValidStudent = studentList.some(
      (std) => std.studentName === studentName
    );
    return isValidStudent;
  }

  // `joiningDate` && `validityDate` format "yyyy-mm-dd"
  function checkValidity(joiningDate, validityDate) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split("-");

    const [yyyy, mm, dd] = validityDate.split("-");
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);

    return (
      maxValid.getTime() >= selected.getTime() &&
      maxValid.getTime() >= today.getTime()
    );
  }

  function getStudent(studentName) {
    const student = studentList.find((std) => std.studentName === studentName);
    return student;
  }

  function addNewResident(residentDirectory) {
    const id = uuidv4();

    const isDocumented = validateStudentRecord(residentDirectory.studentName);

    if (!isDocumented) {
      setErrMsg(
        `Sorry ${residentDirectory.studentName} is not a verified student`
      );
      return;
    }

    const student = getStudent(residentDirectory.studentName);

    const isValid = checkValidity(
      residentDirectory.joiningDate,
      student.validityDate
    );

    if (!isValid) {
      setErrMsg(`Sorry ${residentDirectory.studentName} validity has Expired!`);
      return;
    }

    setErrMsg(null);

    const newResident = {
      id,
      ...residentDirectory,
    };
    // console.log(newResident);
    setResidentList((prevList) => [...prevList, newResident]);
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          handleInput={handleInput}
          residentDirectory={residentDirectory}
          addNewResident={addNewResident}
        />
        <Error errMsg={errMsg} />
        <ResidentsList residentList={residentList} />
      </div>
    </div>
  );
}

export default App;
