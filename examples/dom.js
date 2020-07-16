//get function

//This only gets the class, it doesn't do anything.

document.getElementsByClassName("class-name-here");         //Within the quote, we pass the name of the class within the HTML document

var myContentDivs = document.getElementsByClassName("class-name-here"); //This will store the class in a variable.

var myH2 = myContentDivs[1].getElementsByTagName("h2");                 //If there are multiple elements called with the same class, we need to specify each one. (it is an array)
                            //We also specifically want the h2 element within this particular div

myH2[0].innerHTML = "YO NINJAS";  //This line will change the content of the HTML by selecting a specific element. and then changing the HTML

// -------------------------Easier way to get an element by ID

document.getElementById("id-name");         //This will NOT be an array - there can only be 1 id per page! 
        //Notice, the first says .getElements... whereas this says .getElement...
