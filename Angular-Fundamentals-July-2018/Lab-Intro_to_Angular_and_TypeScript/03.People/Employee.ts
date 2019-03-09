interface IEmployee {
    name: string,
    age: number,
    salary: number,
    tasks: Array<string>,
    getSalary: Function,
    work: Function,
    collectSalary: Function
}

export default class Employee implements IEmployee {
    salary: number;
    tasks: Array<string>;

    constructor(
        public name: string,
        public age: number,
    ) {
        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
        const currentTask: string = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    getSalary(): number {
        return this.salary;
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}
