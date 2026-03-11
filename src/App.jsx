import { useState, useEffect } from "react";
import StudentForm from "./Component/StudentForm";
import StudentTable from "./Component/StudentTable";
import Loader from "./Component/Loader";
import studentsData from "./data/students.json";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1500);

  }, []);

  const addStudent = (student) => {

    const newStudent = {
      ...student,
      id: Date.now()
    };

    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (updatedStudent) => {

    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );

    setEditingStudent(null);
  };

  const deleteStudent = (id) => {

    if (window.confirm("Are you sure you want to delete?")) {

      setStudents(
        students.filter((s) => s.id !== id)
      );

    }
  };

  return (

    <div className="container">

      <h1>Students Management</h1>

      <StudentForm
        addStudent={addStudent}
        editingStudent={editingStudent}
        updateStudent={updateStudent}
        students={students}
      />

      {loading ? (
        <Loader />
      ) : (
        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
          setEditingStudent={setEditingStudent}
        />
      )}

      {/* Toast UI */}
      <Toaster position="top-right" />

    </div>
  );
}

export default App;
