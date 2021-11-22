// class Person {
//     constructor(firstName, lastName, age, id, languages = ['Vietnamese']) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.id = id
//         this.languages = languages 
//     }
//     getInfor(){
//         return `Hello. My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old. I'm speak ${this.languages.join(' and ')}`
//     }
//     get getFirstName(){
//         return this.firstName
//     }

//     set setLastName(lastName){
//         this.lastName = lastName
//     }
//     static getDate(){
//         const now = new Date()
//         return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
//     }
// }


// const person1 = new Person('Nguyen','Thinh',18,'19120666')
// person1.languages.push('English')
// console.log(person1.getInfor())
// console.log(person1)
// const person2 = new Person('Nguyen','Huy',19,'19120532',['English'])
// console.log(person2)

// console.log(person2.getFirstName)
// person2.setLastName = 'Tho'
// console.log(person2)

// console.log(Person.getDate())

// class Student extends Person{
//     constructor(firstName,lastName,age,id,languages,schoolName){
//         super(firstName,lastName,age,id,languages)
//         this.schoolName = schoolName
//     }
// }


// class PersonAccount {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.incomes = []
//         this.expenses = []
//     }


//     totalIncomes(){
//         return this.incomes.reduce((total, income) => {
//             return total + income.cost
//         },0)
//     }

//     totalExpenses(){
//         return this.expenses.reduce((total, expense) => {
//             return total + expense.cost
//         },0)
//     }

//     addIncome(income){
//         this.incomes.push(income)
//     }

//     addExpense(expense){
//         this.expenses.push(expense)
//     }

//     accountInfor(){
//         return `This account is of ${this.firstName} ${this.lastName}`
//     }

//     accountBalance(){
//         return this.totalIncomes() - this.totalExpenses()
//     }
// }

// const account1 = new PersonAccount('Thinh','Nguyen')
// account1.addIncome({cost: 1800000, description: 'Youtuber earning'})
// account1.addExpense({cost: 400000, description: 'buy some food'})

// console.log(account1.totalExpenses())




// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// let age = 250;
// let isMarried = true
// const student = {
//   firstName:'Asabeneh',
//   lastName:'Yetayehe',
//   age:250,
//   isMarried:true,
//   skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// const skillsJson = JSON.stringify(skills)
// console.log(skillsJson)

// console.log(JSON.stringify(age))
// console.log(JSON.stringify(isMarried))
// console.log(JSON.stringify(student,['firstName','lastName']))


// const txtJson = JSON.parse(txt)

// console.log(txtJson)


// let users = []
// for(const user in txtJson){
//     users.push({
//         name: user,
//         amountOfSkills: txtJson[user].skills.length
//     })
// }

// users = users.sort((user1,user2) => {
//     if(user1.amountOfSkills < user2.amountOfSkills) return 1
//     if(user1.amountOfSkills > user2.amountOfSkills) return -1
//     return 0
// })


// console.log(users[0])

// localStorage.clear()

// localStorage.setItem('name',"thinh")
// localStorage.setItem('age',21)
// localStorage.setItem('skills',JSON.stringify(['html','css','javascript']))



// sessionStorage.setItem('name',"thinh")
// sessionStorage.setItem('age',21)
// sessionStorage.setItem('skills',JSON.stringify(['html','css','javascript']))

const pElement = document.querySelector('.text')
const divElement = document.createElement('div')
divElement.innerText = 'My name is thinh'

pElement.appendChild(divElement)
// pElement.removeChild(divElement)

console.log(pElement.classList.contains('thinh'))
console.log({pElement})


const textnode = document.createTextNode('hello')
const textnode1 = document.createAttribute('hi')
console.log(textnode1.nodeType)


const animate = new Animation({
    
})
animate.play()