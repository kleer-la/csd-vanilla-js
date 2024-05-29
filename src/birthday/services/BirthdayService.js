export class BirthdayService {
  constructor(employeeRepository, greetingDelivery) {
    this.employeeRepository = employeeRepository;
    this.greetingDelivery = greetingDelivery;
  }

  sendGreetings(ourDate) {
    const employees = this.employeeRepository.getEmployeesByBirthDate(ourDate);
    
    employees.forEach((employee) => {
      this.greetingDelivery.sendGreetingToEmployee(employee);
    });
  }
}
