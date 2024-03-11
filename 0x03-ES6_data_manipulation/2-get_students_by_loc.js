export default function getStudentsByLocation(students, location) {
    if (typeof students !== 'object') {
        return [];
    }
    return students.filter((student) => student.location === location);
}
