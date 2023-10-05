export default class Customer {
    constructor(id, firstName, lastName, city,age, customerCreditCardNumber) {
        this.userId = id
        this.userFirstName = firstName;
        this.userLastName = lastName
        this.userCity = city;
        this.userAge = age
        this.creditCardNumber = customerCreditCardNumber
    }
}