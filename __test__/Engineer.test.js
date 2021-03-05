const Engineer= require("../lib/Engineer")
describe ("Engineer",()=>{
    test("constructor", ()=>{
        const engineer= new engineer("will",25,"will@gmail.com",1009,"will555")
        expect(engineer.name).toEqual("will")
        expect(engineer.id).toEqual(25)
        expect(engineer.email).toEqual("will@gmail.com")
        expect(engineer.officeNumber).toEqual(1009)
        expect(engineer.github).toEqual("will555")
    })
    test("getName", ()=>{    
        const engineer= new Engineer("will",25,"will@gmail.com",1009,"will555")
        expect(engineer.getName()).toEqual("will")
    })
    test("getid", ()=>{    
        const engineer= new Engineer("will",25,"will@gmail.com",1009,"will555")
        console.log(enginerr.getid())
        expect(engineer.getid()).toEqual(25)
    })
    test("getEmail", ()=>{    
        const engineer= new Engineer("will",25,"will@gmail.com",1009,"will555")
        expect(engineer.getEmail()).toEqual("will@gmail.com")
    })
    test("getofficeNumber", ()=>{    
        const engineer= new Engineer("will",25,"will@gmail.com",1009,"will555")
        expect(engineer.getOfficeNumber()).toEqual(1009)
    })
    test("getGithub", ()=>{
        const engineer= new Engineer("will",25,"will@gmail.com",1009,"will555")
        expect(engineer.getGithub()).toEqual("will555")

    })

})