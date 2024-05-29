import fs from "fs";
import path from "path";
import { Employee } from "./Employee.js";

export class BirthdayService {
  constructor() {}

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    /*
    let __dirname;
    if (typeof __dirname === 'undefined') {
      //ESM environment
      const __filename = fileURLToPath(import.meta.url);
      __dirname = path.dirname(__filename);
    } else {
      // CommonJS environment
      __dirname = __dirname;
    }
    */

    /*const data = fs.readFileSync(
      path.resolve(__dirname, `${fileName}`), //`../${fileName}`),
      "UTF-8"
    );*/

    const data = fs.readFileSync(path.resolve("../csd-vanilla-js/src/birthday", `${fileName}`), "UTF-8");

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    lines.shift();
    const employees = lines
      .map((line) => this.createEmployeeFromLine(line))
      .filter((employee) => employee.isBirthday(ourDate));

    employees.forEach((employee) => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      transport.sendMail(message);
    });
  }

  createEmployeeFromLine(line) {
    const employeeData = line.split(", ");
    const employee = new Employee(
      employeeData[1],
      employeeData[0],
      employeeData[2],
      employeeData[3]
    );
    return employee;
  }
}
