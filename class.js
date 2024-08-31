class Teacher{
    constructor(name,subject,age){
        this.name = name,
        this.subject = subject,
        this.age = age
    }
    lecture(){
        console.log('teachingmath');
    }
}

const topon = new Teacher('topon', 'physics', 44)
console.log(topon);
console.log(topon.lecture());
const ashik = new Teacher('Ashik', 'javascript', 30);
console.log(ashik);