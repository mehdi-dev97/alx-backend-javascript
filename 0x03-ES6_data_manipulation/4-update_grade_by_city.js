export default function updateStudentGradeByCity (students, city, newGrades) {
  if ((students instanceof Array)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade:
            newGrades
              .filter((grade) => grade.studentId === student.id)
              .reduce((acum, current) => acum.grade ?? current.grade, 'N/A') ??
            'N/A'
        };
      });
  }
  return [];
}
