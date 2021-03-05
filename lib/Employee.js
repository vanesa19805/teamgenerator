class Employee{
    constructor(Name,id,Email){
        this.name= Name;
        this.id= id;
        this.email= Email;
    }
    getName(){
        console.log(`Name: ${this.name}`);
        return this.name 
    }
    getid(){
        console.log(`Id; ${this.id}`);
        return this.id
    }
    getEmail(){
        console.log(`Email: ${this.Email}`);
        return this.email
    }
}
 module.exports= Employee
