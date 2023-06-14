import { User } from "./user.js"

export default class Customer extends User{
    constructor(userId, userFirstName, userLastName, userCity,userAge, customerCreditCardNumber) {
        super(userId, userFirstName, userLastName, userCity,userAge)
        this.creditCardNumber = customerCreditCardNumber
    }
}