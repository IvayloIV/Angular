export abstract class Employee {
    salary: number;
    tasks: Array<string>;

    constructor(
        public name: string,
        public age: number
    ) {
        this.salary = 0;    
        this.tasks = [];
    }

    work(): void {
        let firstTask = this.tasks.shift();
        this.tasks.push(firstTask);
        console.log(`${this.name} ` + firstTask);
    }

    protected getSalary(): number {
        return this.salary;
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}
