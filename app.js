var friendArray = ['Brian', 'Jacob', 'Abbie', 'Lindsey', 'John'];
var locationArray = ['bathroom', 'garden', "McDonald's parking lot", 'office', "den", 
                "cellar", "Olive Garden", "greenhouse", "dungeon", "closet"];
var weaponArray = ['gun', 'sword', "baseball bat", "stun gun", "taser", 
                "laser", "flamethrower", "gom jabbar", "goose", "boot",
                "basketball", "rocket", "pie", "water gun", "plant",
                "roast duck", "whisk", "vacuum", "poison", "dagger"];

document.addEventListener("DOMContentLoaded", function() {
   for (let i = 1; i < 101; i++) {
       var accus = document.createElement("h3")
       var accusText = document.createTextNode("Accusation " + i);
       accus.appendChild(accusText);
       document.body.appendChild(accus);
       accus.addEventListener("click", function() {
           return accusAlert(i);
       });
};
});

function accusAlert(i) {
    alert(`I accuse ${friendArray[i % 5]}, with the ${weaponArray[i % 20]} in the ${locationArray[i % 10]}!`);
}