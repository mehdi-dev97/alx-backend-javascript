const fs = require('fs');
/**
 * Counts the students in a CSV data file.
 * @param {String} path
 * @returns {Promise}
 */
function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data.toString().trim().split('\n');
        const filedData = fileLines.slice(1);
        const map = new Map();
        filedData.forEach((value) => {
          const data = value.split(',');
          const key = data[data.length - 1].trim();

          if (!map.has(key)) {
            map.set(key, []);
          }
          map.get(key).push(data.slice(0, 2)[0]);
        });
        console.log(`Number of students: ${filedData.length}`);
        for (const [key, item] of map.entries()) {
          console.log(`Number of students in ${key}: ${item.length}. List: ${item.join(', ')}`);
        }
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
