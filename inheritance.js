class TeamMember{
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name,address){
     
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
   groupSupportTime;
   constructor(name,address, time){
    super(name,address)
    this.groupSupportTime = time;
   }
    startSession() {
        console.log('start a support session');
    }
}
class StudentCare extends TeamMember{
   
    buildARoutine(student){
        console.log(this.name,'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name,'release app version', version);
    }
}
const aamir = new Support('Aamir Khan', 'BD',11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SKR Khan ', 'uk', 9);
const akshay = new Support ('Akshay Kumar', 'ID', 11);
const alia = new StudentCare('Alia Bhatt', 'Mumbai', 12);
const ash  = new NeptuneDev('Ash','Mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash.name);

// barir kaj google sarce (js class)
