import { OurDate } from "./OurDate.js";
import { SmtpGmailTransport } from "./SmtpGmailTransport.js";
import { BirthdayService } from "./BirthdayService.js";

const SMTP_PORT = 465;
const SMTP_URL = "smtp.gmail.com";
const FILENAME = "employee_data.txt";

const transport = new SmtpGmailTransport();

const birthdayService = new BirthdayService();

birthdayService.sendGreetings(new OurDate("2008/10/08"), FILENAME, SMTP_URL, SMTP_PORT, transport);

