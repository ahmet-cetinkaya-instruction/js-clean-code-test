import User from "./user.js";

export default class Employee extends User{
    constructor(userId, userFirstName, userLastName, userCity,userAge, employeeSalary) {
        this.userId = userId
        this.userFirstName = userFirstName;
        this.userLastName = userLastName
        this.userCity = userCity;
        this.userAge = userAge
        this.salary = employeeSalary
    }
}