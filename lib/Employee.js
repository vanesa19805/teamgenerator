class Employee{
    constructor(Name,id,email){
        this.name= Name;
        this.id= id;
        this.email= email;
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
        console.log(`Email: ${this.email}`);
        return this.email
    }
    getRole(){
   
    return "employee"
}
}
 module.exports= Employee