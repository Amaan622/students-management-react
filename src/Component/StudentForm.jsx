import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function StudentForm({ addStudent, editingStudent, updateStudent, students }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {

    if (editingStudent) {
      setFormData(editingStudent);
    }

  }, [editingStudent]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Check duplicate email
    const emailExists = students.some(
      (s) =>
        s.email.toLowerCase() === formData.email.toLowerCase() &&
        s.id !== formData.id
    );

    if (emailExists) {
      toast.error("Email already exists!");
      return;
    }

    if (editingStudent) {
      updateStudent(formData);
      toast.success("Student updated");
    } else {
      addStudent(formData);
      toast.success("Student added");
    }

    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;
