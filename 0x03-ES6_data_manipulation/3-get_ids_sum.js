export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, currentValue) =>
        accumulator.id ?? accumulator + currentValue.id,
      0
    );
  }
  return 0;
}
