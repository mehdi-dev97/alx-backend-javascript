const express = require("express");
const fs = require("fs");
const port = 1245;
const database = process.argv[2] ?? "";
const app = express();

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error("Cannot load the database"));
    }
    if (dataPath) {
      fs.readFile(dataPath, (err, data) => {
        if (err) {
          reject(new Error("Cannot load the database"));
        }
        if (data) {
          const reportParts = [];
          const fileLines = data.toString("utf-8").trim().split("\n");
          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(",");
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1
          );

          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(",");
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }

          const totalStudents = Object.values(studentGroups).reduce(
            (pre, cur) => (pre || []).length + cur.length
          );
          reportParts.push(`Number of students: ${totalStudents}`);
          for (const [field, group] of Object.entries(studentGroups)) {
            reportParts.push(
              [
                `Number of students in ${field}: ${group.length}.`,
                "List:",
                group.map((student) => student.firstname).join(", "),
              ].join(" ")
            );
          }
          resolve(reportParts.join("\n"));
        }
      });
    }
  });

app.get("/", (_, res) => {
  const responseText = "Hello Holberton School!";

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Content-Length": responseText.length,
  });
  res.write(Buffer.from(responseText));
});

app.get("/students", (_, res) => {
  const responseParts = ["This is the list of our students"];

  countStudents(database)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join("\n");
      res.writeHead(200, {
        "Content-Type": "text/plain",
        "Content-Length": responseText.length,
      });
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join("\n");
      res.writeHead(200, {
        "Content-Type": "text/plain",
        "Content-Length": responseText.length,
      });
      res.write(Buffer.from(responseText));
    });
});

app.listen(port, () => {
  console.log(`Host : http://localhost:${port}`);
});

module.exports = app;
