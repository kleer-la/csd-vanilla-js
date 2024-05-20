import fs from "fs";
import path from "path";
import { Employee } from "./Employee";

export class BirthdayService {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  sendGreetings(ourDate, smtpUrl, smtpPort, transport) {
    const employees = this.employeeRepository.getEmployeesByBirthDate(ourDate);
    
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
}
