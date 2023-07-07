function myage(birthdate) {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - 
               (today.getMonth() < birthdate.getMonth() || 
               (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
  }



/*  
    // Create a new Date object

var currentDate = new Date();

// Get the individual components of the date and time
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
var year = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Format the date and time string
var dateTimeString = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

var today = dateTimeString;
*/


var currentDate = new Date();
var options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

var today = currentDate.toLocaleString(undefined, options);
 


 // why ur cheating?
  var irlfriends24 = ["omsin", "cha (uhh)", "save (dangerous!!!)", "toto (good child)", "dis (too gay)" ]
  var hate = [""]
  var love = ["liem", "twisty", "is my best freinds :)"]
  var oneword = ["เสก"]
  
  
  const birthdate = new Date(2009, 12, 17); 
  console.log(`DEBUG: ${myage(birthdate)} (${today})`)
  
  
//age = document.getElementById("age")
//console.log(age)
  
document.getElementById("age").innerHTML = `${myage(birthdate)}`;
console.log("Host in github pages ❤️ (https://pages.github.com/)")
console.log("---Credit--- \nazuremist_ for development and apporve this code!\ntwistynado for recommends fonts! (also developemnt too :D)\nChatGPT/AI for help me to make this code!\n---Credit---")
console.log("I wanna be a girl :3")
console.log("Trans child (hidden) vs homophobic family")
console.log("Did you know?\nM.2/4 is gay so much!")
console.log("EASTEREGG: we have a few arrays in this code, try to find them all!")
console.log("if you found it!, try to run this code in your console: ")
console.log("array.forEach(tell => {\n    console.log(tell);\n});");
console.log("replace array with the array you found, and see what happens!")
console.log("good luck to found all! (easy)")
  
