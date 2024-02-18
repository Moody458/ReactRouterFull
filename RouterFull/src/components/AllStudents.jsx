import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Students() {
  const { id } = useParams();
  const { students } = useContext(DataContext);
  console.dir(students);

  return (
    <div>
      <h1>All Students</h1>
      {students.map((student) => (
        <Link to={`/allStudents/${student.id.name}`} key={student.id.value}>
          <p>
            {student.name.first} {student.name.last}
          </p>
        </Link>
      ))}
    </div>
  );
}
