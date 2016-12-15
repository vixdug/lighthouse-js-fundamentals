var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var loop = 0
while (loop < 8) {
  console.log(ingredients[loop]);
  loop++;
}
// Write a for loop that prints out the contents of ingredients:
for (var repeat = 0; repeat < ingredients.length; repeat++) {
 console.log(ingredients[repeat]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var repeat = 8; repeat >= 0; repeat--) {
  console.log(ingredients[repeat])
}
