const Engineer = require("../lib/Engineer")

// describe ("Engineer",()=>{

//     test("constructor", ()=>{
//         const engineer= new engineer("will",25,"will@gmail.com",1009,"will555")
//         expect(engineer.name).toEqual("will")
//         expect(engineer.id).toEqual(25)
//         expect(engineer.email).toEqual("will@gmail.com")
//         expect(engineer.officeNumber).toEqual(1009)
//         expect(engineer.github).toEqual("will555")
//     })

test("canSetGithub", () => {
    const github = "will555";
    const employee = new Engineer("will", 25, "will@gmail.com", "will555");
    expect(employee.github).toBe(github)
});


test("getGithub", () => {
    const engineer = new Engineer("will", 25, "will@gmail.com", "will555")
    expect(engineer.getGithub()).toEqual("will555")

});

test("getRole", () => {
    const engineer = new Engineer()
})