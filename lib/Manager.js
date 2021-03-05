const Employee= require("./Employee")
//extends the Employee to append the constructor in that file
class Manager extends Employee{
    contructor(name,id,email, officeNumber){
        super(name,id,email)
        this.officeNumber= officeNumber
    }
    getofficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
        
    }
}
module.exports= Manager