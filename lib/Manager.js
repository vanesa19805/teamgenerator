const Employee= require("./Employee")

//extends the Employee to append the constructor in that file
class Manager extends Employee{
    constructor(name,id,email, officeNumber){
        super(name,id,email)
        this.officeNumber= officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    };
    getRole(){
        return "Manager"
        
    }
}
module.exports= Manager