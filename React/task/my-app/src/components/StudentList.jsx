import React from "react";
import StudentCard from "./StudentCard";
import styles from "../styles/StudentList.module.css";

const StudentList = ({ students }) => {
  return (
    <div className={styles.list}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
};

export default StudentList;
