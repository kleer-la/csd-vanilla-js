export class BirthdayService {
  constructor(employeeRepository, greetingDelivery) {
    this.employeeRepository = employeeRepository;
    this.greetingDelivery = greetingDelivery;
  }

  sendGreetings(ourDate, smtpUrl, smtpPort, transport) {
    const employees = this.employeeRepository.getEmployeesByBirthDate(ourDate);
    
    employees.forEach((employee) => {
      this.greetingDelivery.sendGreetingToEmployee(employee);
    });
  }
}
