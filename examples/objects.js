//Objects can be created as new similarly as with an array:

var myArray = new Array();
myArray[0] = 8;             //These are the properties given to the array:
myArray[1] = "hello";

//Using a car as an example, we can give properties to the object

var myCar = new Object();
myCar.maxSpeed = 50;        //The first property is the speed
myCar.driver = "Katie";     //The second property is the driver
myCar.drive = function(){console.log("now driving");};  //Methods, or functions, can also be applied to objects

console.log(myCar.driver);   //If we were to log this to the console, it would output "Katie"

//For the method in the above example, there are two semicolons towards the end. This is because the first is ending the `console.log` statement
//The second is ending the assignment operator.

myCar.drive();              //This is how the method (function) is called
//The parenthesis is used here because we are calling the method. It was not used above, because this method did not exist yet.


//The shorthand way to build the Object:

var myCar2 = {
    maxSpeed: 70, 
    driver: "Mike", 
    drive: function(){
        console.log("now driving");
    }
};

//The above can all be done on one line, but doing like the above makes it easier to read.

//Below is another application for the above section of code:

var myCar2 = {
    maxSpeed: 70, 
    driver: "Mike", 
    drive: function(speed, time){       //This will calculate the distance of the car traveled.
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);           //This will print the car's top speed
myCar.drive(50, 3);                     //This will print the speed the car was going in mph, times the length of time it took to get there in hours
                                        //The output will be 150








//----------------- THIS is a keyword that is owned by the object it is nested within. ------------------

var myCar2 = {
    maxSpeed: 70, 
    driver: "Mike", 
    drive: function(speed, time){      
        console.log(speed * time);
    },
    test: function(){
        console.log(this);  //In this case, THIS is owned by the object myCar2
    }

};
      
myCar2.test();   //When we call the function here, it will log the object to the console
console.log(myCar2.maxSpeed);        
myCar.drive(50, 3);   


var myCar3 = {
    maxSpeed: 70, 
    driver: "Shaun", 
    drive: function(speed, time){      
        console.log(speed * time);
    },
    test: function(){
        console.log(this);  //In this case, THIS is owned by the object myCar2
    }

};

myCar2.test();   //When we call the function here, it will log the object to the console
myCar3.test();   //This will log the second object as well.  
console.log(myCar2.maxSpeed);        
myCar.drive(50, 3); 

//THIS can be used in place of a method. It is essentially a placeholder for the object name it is owned by.


//------------------------------------Constructor Functions


var Car = function(maxSpeed, driver) {    //generally start with a capital letter
    
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };

};

//Here we are creating new car objects

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humphrey");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

//if we were to log the following to the console:

myCar.drive(30,5);
myCar3.logDriver();

//The output would be:

//150
//driver name is Shaun
