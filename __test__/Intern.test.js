const { test, expect } = require("@jest/globals")
const { describe } = require("yargs")
const Intern= require("../lib/Intern")
describe ("Intern", ()=>{
    test("constructor", ()=>{
        const intern= new engineer("will",25,"will@gmail.com",1009,"will555","penn")
        expect(intern.name).toEqual("will")
        expect(intern.id).toEqual(25)
        expect(intern.email).toEqual("will@gmail.com")
        expect(intern.officeNumber).toEqual(1009)
        expect(intern.github).toEqual("will555")
        expect(intern.school).toEqual("penn")
    })
    test("getName", ()=>{    
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","penn")
        expect(intern.getName()).toEqual("will")
    })
    test("getid", ()=>{    
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","penn")
        console.log(intern.getid())
        expect(intern.getid()).toEqual(25)
    })
    test("getEmail", ()=>{    
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","penn")
        expect(intern.getEmail()).toEqual("will@gmail.com")
    })
    test("getofficeNumber", ()=>{    
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","penn")
        expect(intern.getOfficeNumber()).toEqual(1009)
    })
    test("getGithub", ()=>{
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555", "penn")
        expect(intern.getGithub()).toEqual("will555")
    })
    test("getSchool", ()=>{
        const intern= new Intern("will",25,"will@gmail.com",1009,"will555","penn")
    })  
})