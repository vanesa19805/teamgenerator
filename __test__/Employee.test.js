const Employee= require("../lib/Employee");


// describe ("Employee",()=>{
//     test("constructor", ()=>{  
//       const employee= new Employee("will",25,"will@gmail.com")
//       expect(employee.name).toEqual("will")
//       expect(employee.id).toEqual(25)
//       expect(employee.email).toEqual("will@gmail.com")
//     })

test("canSetName", ()=>{   
    const name= "will"
    const employee= new Employee(name);
    expect(employee.name).toBe(name);
});
test("canSetid", ()=>{   
    const id=25
    const employee= new Employee("will",id);
    expect(employee.id).toBe(id);
});
test("canSetEmail", ()=>{   
    const email= "will@gamil.com"
    const employee= new Employee("will",25,email);
    expect(employee.email).toBe(email);
});



   test("getRole", ()=>{
       const role= "employee"   
        const employee= new Employee("will",25,"will@gmail.com")
        expect(employee.getRole()).toBe(role)
    });

