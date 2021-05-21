const Manager= require("../lib/Manager")



// describe ("Manager",()=>{
//     test("constructor", ()=>{
//         const manager= new manager("will",25,"will@gmail.com",1009)
//         expect(manager.name).toEqual("will")
//         expect(manager.id).toEqual(25)
//         expect(manager.email).toEqual("will@gmail.com")
//         expect(manager.officeNumber).toEqual(1009)
//     })





test("canSetOfficeNumber", ()=>{   
    const officeNumber= 1009
    const employee= new Manager("will",25,"will@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});


   test("getRole", ()=>{
       const role= "Manager"   
        const employee= new Manager("will",25,"will@gmail.com",1009)
        expect(employee.getRole()).toBe(role)
    });


    test("getOfficeNumber", ()=>{    
        const manager= new Manager("will",25,"will@gmail.com",1009);
        expect(manager.getOfficeNumber()).toEqual(1009);
 });