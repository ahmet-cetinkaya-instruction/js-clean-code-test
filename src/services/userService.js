import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import { MongoLogger } from "../crossCuttingConcerns/mongoLogger.js"
export default class UserService {
    constructor() {
        this.err = new Array()
        this.employees =  new Array()
        this.customers = new Array();
        this.loggerService = new MongoLogger();
    }

    load() {
        var wrong = false;
        for (let i=0, len=users.length; i< len; i++) {
            if (users[i].type == "customer"){
                if (!this.customercheck(users[i])) {
                    this.customers.push(users[i])
                }
            } 
            
            else if (users[i].type == "employee"){
                if (!this.employeeCheck(users[i])) {
                    this.employees.push(users[i])
                }
            } else {
                wrong = 1
            }

            if (wrong)
                this.err.push(new DataError("Wrong user", users[i]))
        }
    }

    customercheck(user) {
        let fields = "id firstName lastName age city".split(" ")
        for (const f of fields) {
            if (!err) var err = false
            if (!user[f]) {
                err = 1
                this.err.push(
                    new DataError(`Validation problem. ${f} is required`, user))
            }
        }

        if (Number.isNaN(+(+user.age))) {
            err = 1
            
            this.err.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
            
        }

        return err
    }

    employeeCheck(user) {
        let fields = "id firstName lastName age city salary".split(" ")
        for (const f of fields) {
            if (!err) var err = false
            if (!user[f]) {
            
                this.err.push(
                    new DataError(`Validation problem. ${f} is required`, user))
            }
        }

        if (Number.isNaN(+(user.age))) {
            err = true
            this.err.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        
        return err
    }

    add(user) {
        if(user.type=="customer"){
            if (!this.customercheck(user)) {
                this.customers.push(user)
            }
        }
        
        else if(user.type=="employee"){
            if (!this.employeeCheck(user)) {
                
                this.employees.push(user)
            }
        }
        
        else{
            this.err.push(
                new DataError("This user can not be added", user))
        }

        this.loggerService.newDocument(user)
    }

    customerList() {
        return this.customers
    }

    getCustomer(id) {
        for (let i = 0, len = this.customers.length; i < len; ++i) {
          if (this.customers[i].id == id) {
            
            return this.customers[i];

          }
        }
        
        return null;
    }

    customersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer2 != null && customer1.userFirstName>customer2.userFirstName){ return 1; }
            else if(customer2 != null && customer1.userFirstName==customer2.userFirstName){ return 0; }
            
            else{ 
                return -1
            }
        })
    } 
}