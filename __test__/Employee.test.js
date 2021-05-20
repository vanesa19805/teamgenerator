const Employee= require("../lib/Employee")


describe ("Employee",()=>{
    test("constructor", ()=>{  
      const employee= new Employee("will",25,"will@gmail.com")
      expect(employee.name).toEqual("will")
      expect(employee.id).toEqual(25)
      expect(employee.email).toEqual("will@gmail.com")
    })

    
   test("getName", ()=>{    
        const employee= new Employee("will",25,"will@gmail.com")
        expect(employee.getName()).toEqual("will")
    })
    test("getid", ()=>{    

        const employee= new Employee("will",25,"will@gmail.com")
        console.log(employee.getid())
        expect(employee.getid()).toEqual(25)
    })
    test("getEmail", ()=>{    
        const employee= new Employee("will",25,"will@gmail.com")
        expect(employee.getEmail()).toEqual("will@gmail.com")

    })

})