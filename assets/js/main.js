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
  var irlfriends24 = ["no one :3" ]
  var hate = ["223.207.246.70"]
  var love = ["liem", "twisty", "and everyone", "is my best freinds :)"]
  var oneword = ["Chipi Chipi Chapa Chapa Dubi Dubi Daba Daba Magico Mi Dubi Dubi BOOM BOOM BOOM"]
  
  

  var birthdate = new Date(2009, 11, 17); // why 11 is 12? because month is zero-based, so we add 1
  console.log(`DEBUG: ${myage(birthdate)} (${today})`)
  
  
//age = document.getElementById("age")
//console.log(age)
  
document.getElementById("age").innerHTML = `${myage(birthdate)}`;
console.log("Host in github pages ❤️ (https://pages.github.com/)")
console.log("---Credit--- \bluestar_ for development and apporve this code!\ntwistynado for recommends fonts! (also developemnt too :D)\nChatGPT/AI for help me to make this code!\n---Credit---")
console.log("I wanna be a girl :3")
console.log("Trans child (hidden) vs transphobia/homophobic family and bully")
console.log("Trying live with this shit world...")
console.log("Did you know?\nM.2/4 is fucking the hell...")
// print big red warning message "!! WARNING !!"
console.log('%c !! HOLD UP !!', 'color: red; font-size: 50px;');
console.log('%c This website/script and domain will get the final update in 20 December 2023, after that will no any updates in here, we are moving to https://blueskychan.dev soon! Thanks you for following me :3', 'color: black; background-color: yellow; font-size: 16px;');
console.log('Whatever, console.log(oneword)')
setTimeout(function() {
  alert('Please checkout https://blueskychan.dev :3');
}, 1000);
