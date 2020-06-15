//Day 19 - Practical Example using loops

var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++)
{
    links[i].className = "link-" + i;
}
    //This particular function will loop through link tags in your html document, and give them a class identifier of 
    //link-i; i being which number of link you assign, starting with 0. The code will loop through each link to assign it a
    //number.