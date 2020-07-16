var myDate = new Date();        //This will store the current date
console.log(myDate);            //This will output the date and time in the console


var myPastDate = new Date(1545, 11, 2);     //This is structured (Year, Month (counted from 0 - 11), Day)
var myFutureDate = new Date(2515, 0, 31);
console.log(myPastDate);                    //When these two are logged, they won't display time - they will, but only as 0
console.log(myFutureDate);

varmyPastDate = new Date(1545, 11, 2, 10, 30, 15);      //This is structured (Year, Month, Day, Hour, Minute, Second)

//-----------------------Functions to be called on Dates-----------------------------//

var birthday = new Date(1993, 10, 15, 11, 15, 25);
var birthday2 = new Date(1993, 10, 15, 11, 15, 25);

//get the month of the date (0-11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1-31)
console.log(birthday.getDate());

//get the day of the week (0-6)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number of milliseconds since 1st Jan 1970 - This may seem random, but it is useful when comparing dates
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()) {
    console.log("birthdays are equal");
}
else {
    console.log("birthdays are note equal");
}               //Here we can use the get Time feature to check if the birthdays are in fact the same. If we were to leave out the `.getTime` the console would return not equal, as they are two separate objects