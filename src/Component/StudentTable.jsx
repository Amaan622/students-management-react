import { exportToExcel } from "../utils/exportExcel";

function StudentTable({ students, deleteStudent, setEditingStudent }) {

  return (
    <div className="table-container">

      <button
        className="download-btn"
        onClick={() => exportToExcel(students)}
      >
        Download Excel
      </button>

      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (
            <tr key={student.id}>

              <td className="student-name">{student.name}</td>
              <td className="student-email">{student.email}</td>
              <td className="student-age">{student.age}</td>

              <td className="action-buttons">

                <button
                  className="edit-btn"
                  onClick={() => setEditingStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;
