(function() {
  function myage(birthdate) {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() -
      (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
  }

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

  var irlfriends24 = ["omsin", "cha (uhh)", "save (dangerous!!!)", "toto (good child)", "dis (unfair!!!!!!!!!)"];
  var hate = ["back kid boy", "because too gay and try sexual harassment me", "yeah i annoying them."];
  var love = ["liem", "twisty", "is my best freinds :)"];
  var oneword = ["เสก"];

  const birthdate = new Date(2009, 12, 17);
  console.log(`DEBUG: ${myage(birthdate)} (${today})`);

  document.getElementById("age").innerHTML = `${myage(birthdate)}`;
  console.log("Host in firebase ❤️ (https://firebase.google.com/)");
  console.log("---Credit--- \nazuremist_ for development and apporve this code!\ntwistynado for recommends fonts! (also development too :D)\nChatGPT/AI for help me to make this code!\n---Credit---");
  console.log("I wanna be a girl :3");
  console.log("Did you know?\nM.2/4 is gay so much!");
  console.log("EASTEREGG: we have a few arrays in this code, try to find them all!");
  console.log("if you found it!, try to run this code in your console: ");
  console.log("array.forEach(tell => {\n    console.log(tell);\n});");
  console.log("replace array with the array you found, and see what happens!");
  console.log("good luck to found all! (easy)");
})();




