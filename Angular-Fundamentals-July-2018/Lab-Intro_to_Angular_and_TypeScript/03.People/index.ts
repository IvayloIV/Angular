import Junior from './Junior';
import Senior from './Senior';
import Manager from './Manager';

const manager: Manager = new Manager('Pesho', 12);
manager.dividend = 23;
manager.salary = 15;
manager.collectSalary();
manager.work();
manager.work();
manager.work();
manager.work();
