class EmployeePayrollData {
id;
salary;
constructor(id, name, salary) {
this.id = id;
this.name = name;
this.salary = salary;
}

get name() { return this._name; }
set name(name) { this._name = name; }

toString() {
  return "id=" + this.id + ", name='" + this.name +", salary=" +this.salary;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
console.log(employeePayrollData.toString()); 
employeePayrollData.name="john"; 
console.log(employeePayrollData.toString());

