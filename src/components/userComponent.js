import Customer from "../models/customer.js"
import { User } from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

var service = new UserService()

var user1 = new User(1,"Engin","Demiroğ","Ankara")
var user2 = new User(2,"Ahmet","Çetinkaya","Antalya")
service.add(user1)
service.add(user2)

console.log(service.customerList())
console.log(service.getCustomer(2))

var customer = {id:1, firstName:"Engin"}

customer.lastName = "Demiroğ"

console.log(customer.lastName)

service.load()

var customer = new Customer(1,"Seda","Yılmaz","Ankara","Yirmi Dört");
customer.type = "customer"

service.add(customer)
console.log(service.customers)
console.log(service.employees)

console.log(service.errors)

console.log(service.customersSorted())