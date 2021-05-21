
const Intern= require("../lib/Intern")


// describe ("Intern", ()=>{
//     test("constructor", ()=>{
//         const intern= new engineer("will",25,"will@gmail.com",1009,"will555","penn")
//         expect(intern.name).toEqual("will")
//         expect(intern.id).toEqual(25)
//         expect(intern.email).toEqual("will@gmail.com")
//         expect(intern.officeNumber).toEqual(1009)
//         expect(intern.github).toEqual("will555")
//         expect(intern.school).toEqual("penn")
//     })



    test("getRole", ()=>{
        const role= "Intern"   
         const employee= new Intern("will",25,"will@gmail.com")
         expect(employee.getRole()).toBe(role)
     });
     
     test("canSetSchool", ()=>{   
        const school= "upenn"
        const employee= new Intern("will",25,"will@gmail.com",school);
        expect(employee.school).toBe(school);
    });





    test("getSchool", ()=>{
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","upenn")
    })  
