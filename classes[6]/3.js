/*Создайте класс «Сотрудник» со свойствами
имени и зарплаты. Включите метод расчета
годовой зарплаты. Создайте подкласс под
названием «Менеджер», который
наследуется от класса «Сотрудник» и
добавляет дополнительное свойство для
отдела. Переопределить метод расчета
годовой зарплаты, чтобы включить бонусы
для менеджеров. Создайте два экземпляра
класса «Менеджер» и рассчитайте их годовую
зарплату.*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = this.salary * 12;
    const bonus = 0.1 * baseSalary;
    return baseSalary + bonus;
  }
}

const manager1 = new Manager("Иван", 5000, "Продажи");
const manager2 = new Manager("Мария", 6000, "Маркетинг");

const annualSalary1 = manager1.calculateAnnualSalary();
const annualSalary2 = manager2.calculateAnnualSalary();

console.log(`Годовая зарплата ${manager1.name}: $${annualSalary1}`);
console.log(`Годовая зарплата ${manager2.name}: $${annualSalary2}`);
