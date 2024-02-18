import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function SingleStudent() {
  const { id } = useParams();
  const { students } = useContext(DataContext);
  const selectedStudent = students.find(
    (singleStudent) => singleStudent.id.name === id
  );

  return (
    <div>
      {selectedStudent && (
        <div key={selectedStudent.id} className="SingleStudentContainer">
          <div className="SingleStudentImg">
            <img src={selectedStudent.picture.large} />
          </div>
          <div className="SingleStudentText">
            <h1>
              {selectedStudent.name.first} {selectedStudent.name.last}
            </h1>
            <h2>Gender: {selectedStudent.gender}</h2>
            <h2>
              Location: {selectedStudent.location.city},{" "}
              {selectedStudent.location.country}
            </h2>
            <h2> {selectedStudent.email}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
