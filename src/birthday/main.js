import { OurDate } from "./domain/OurDate.js";
import { SmtpGmailTransport } from "./infrastructure/SmtpGmailTransport.js";
import { FileEmployeesRepository } from "./infrastructure/FileEmployeesRepository.js";
import { BirthdayService } from "./services/BirthdayService.js";
import { SmptGreetingDelivery } from "./infrastructure/SmtpGreetingDelivery.js";

const SMTP_PORT = 465;
const SMTP_URL = "smtp.gmail.com";
const FILENAME = "employee_data.txt";

const transport = new SmtpGmailTransport();
const employeeRepository = new FileEmployeesRepository("employee_data.txt");
const greetingDelivery = new SmptGreetingDelivery(SMTP_URL,
      SMTP_PORT,
      transport);
const birthdayService = new BirthdayService(employeeRepository, greetingDelivery);

birthdayService.sendGreetings(new OurDate("2008/10/08"));
