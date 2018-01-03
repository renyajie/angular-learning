export class Employee {
    constructor(
        public empId: number,
        public empName: string,
        public gender: string,
        public email: string,
        public dId?: number, ) {}

    static fromJSON(json: any): Employee {
        const emp = Object.create(Employee.prototype);
        Object.assign(emp, json);
        return emp;
    }

    toString() {
        return `
        Employee {
            empId: ${this.empId},
            empName: ${this.empName},
            gender: ${this.gender},
            email: ${this.email},
            dId: ${this.dId}
        }`;
    }
}
