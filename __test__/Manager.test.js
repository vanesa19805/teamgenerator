const Manager= require("../lib/Manager")


describe ("Manager",()=>{
    test("constructor", ()=>{
        const manager= new manager("will",25,"will@gmail.com",1009)
        expect(manager.name).toEqual("will")
        expect(manager.id).toEqual(25)
        expect(manager.email).toEqual("will@gmail.com")
        expect(manager.officeNumber).toEqual(1009)
    })
    test("getName", ()=>{    
        const manager= new Manager("will",25,"will@gmail.com",1009)
        expect(manager.getName()).toEqual("will")
    })
    test("getid", ()=>{    
        const manager= new Manager("will",25,"will@gmail.com",1009)
        console.log(manager.getid())
        expect(manager.getid()).toEqual(25)
    })
    test("getEmail", ()=>{    
        const manager= new Manager("will",25,"will@gmail.com",1009)
        expect(manager.getEmail()).toEqual("will@gmail.com")
    })
    test("getofficeNumber", ()=>{    
        const manager= new Manager("will",25,"will@gmail.com",1009)
        expect(manager.getOfficeNumber()).toEqual(1009)
})

})