class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log('start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SKR Khan ', 'uk');
const akshay = new Support ('Akshay Kumar', 'ID');

aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay,);
// console.log();