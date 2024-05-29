import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { Employee } from "../domain/Employee.js";

export class FileEmployeesRepository {
    constructor(fileName){
        this.fileName= fileName;
    }

    getEmployeesByBirthDate(ourDate){
      //let __dirname;
      //if (typeof __dirname === 'undefined') {
          // ESM environment
      //    const __filename = fileURLToPath(import.meta.url);
      //    __dirname = path.dirname(__filename);
      //} else {
          // CommonJS environment
      //    __dirname = __dirname;
      //}
  

      //const data = fs.readFileSync(
      //    path.resolve(__dirname, `../${this.fileName}`),   //`${this.fileName}`
      //    "UTF-8"
      //  );
        
      const data = fs.readFileSync(path.resolve("../csd-vanilla-js/src/birthday", `${this.fileName}`), "UTF-8");
          
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      lines.shift();
      const employees = lines
        .map((line) => this.createEmployeeFromLine(line))
        .filter((employee) => employee.isBirthday(ourDate));
        
      return employees;
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