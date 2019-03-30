import { Employee } from './Employee';

export class Manager extends Employee {
    dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
        this.dividend = 0;
    }

    protected getSalary(): number {
        return this.salary + this.dividend;
    }
}