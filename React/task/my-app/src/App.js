import React from "react";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import styles from "./styles/App.module.css";

const App = () => {
  const students = [
    { id: 1, name: "Sarah Ali", grade: 95 },
    { id: 2, name: "Omar Tarek", grade: 82 },
    { id: 3, name: "Lina Haddad", grade: 76 }
  ];

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Student Grades</h1>
      <StudentList students={students} />
      <Footer total={students.length} />
    </div>
  );
};

export default App;
