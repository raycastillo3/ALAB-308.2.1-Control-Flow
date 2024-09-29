const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const eachPlantMinSpace = 0.8;
const initialPlants = 100
const totalPlants = eachPlantMinSpace * initialPlants;
const week1 = totalPlants * 2;
const week2 = week1 * 2;
const week3 = week2 * 2;


try {
  if (totalPlants > area) {
    throw new Error("There is not enough space: ");
  } else {
    console.log('On week 1: ')
    if (week1 > area * 0.8) {
      console.log("your plants must be pruned");
    } else if (week1 >= area * 0.5 && week1 <= area * 0.8) {
      console.log("time to start monitoring your plants");
    } else {
      console.log("you can plant here");
    }
    console.log('On week 2: ')
    if (week2 > area * 0.8) {
      console.log("your plants must be pruned");
    } else if (week2 >= area * 0.5 && week2 <= area * 0.8) {
      console.log("time to start monitoring your plants");
    } else {
      console.log("you can plant here");
    }
    console.log('On week 3: ')
    if (week3 > area * 0.8) {
      console.log("your plants must be pruned");
    } else if (week3 >= area * 0.5 && week3 <= area * 0.8) {
      console.log("time to start monitoring your plants");
    } else {
      console.log("you can plant here");
    }
  }
} catch (err) {
  console.log(err);
}

console.log('Congratulations, you catched the error!')