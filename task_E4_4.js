// Parent class
function ElecDevice(name){
    this.name = name;
    this.isPlugged = false;
    this.quickCharge = false;
}


// Functions for primary class
ElecDevice.prototype.turnOn = function (){
    this.isPlugged = true;
    console.log(`${this.name} is turned on`);
}

ElecDevice.prototype.turnOff = function (){
    this.isPlugged = false;
    console.log(`${this.name} is turned off`);
}


// Child classes
function Phone(name, display, camera, quickCharge){
    this.name = name;
    this.display = display;
    this.camera = camera;
    if (quickCharge){this.quickCharge = true}
}

Phone.prototype = new ElecDevice()

Phone.prototype.getInfo = function (){
    console.group(`Phone ${this.name} info:`);
    console.log(`Name is ${this.name}\nDisplay is ${this.display}\nCamera is ${this.camera}mp`);
    if(this.quickCharge){console.log(`It has quick charge`)}
    if(this.isPlugged){console.log(`Care, it's plugged in`)}
    console.groupEnd();
}


function TV(name, display, channels){
    this.name = name;
    this.display = display;
    this.channels = channels;
}

TV.prototype = new ElecDevice()

TV.prototype.getInfo = function (){
    console.group(`TV ${this.name} info:`);
    console.log(`Name is ${this.name}\nDisplay is ${this.display}\nIt supports ${this.channels} channels`);
    if(this.isPlugged){console.log(`Care, it's plugged in`)}
    console.groupEnd();
}


// Instances
const iPhone = new Phone('iPhone', 10, 12, true);

const xiaomi = new Phone('Xiaomi', 11, 15);

const samsung = new TV('Samsung', 28, 70);

const sony = new TV('Sony', 30, 75);

samsung.getInfo();
sony.getInfo();
iPhone.getInfo();
xiaomi.getInfo();
samsung.turnOn();
samsung.getInfo();
iPhone.turnOn();
iPhone.getInfo();
