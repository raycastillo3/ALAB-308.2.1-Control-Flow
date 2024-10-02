const radius = 5;
const PI = 3.1415; 
const area = PI * radius * radius;
const eachPlantMinSpace = 0.8;
const plant = eachPlantMinSpace * 20;
const week1 = plant*2;
const week2 = week1*2;
const week3 = week2*2;

if (week1 > area * 0.8) {
    console.log("pruned");
} else if ((week1 >= area * 0.5) && (week1 <= area * 0.8)) {
    console.log("monitored");
} else {
    console.log("planted");
} 

if (week2 > area * 0.8) {
    console.log("pruned");
} else if ((week2 >= area * 0.5) && (week2 <= area * 0.8)) {
    console.log("monitored");
} else {
    console.log("planted");
}

if (week3 > area * 0.8) {
    console.log("pruned");
} else if ((week3 >= area * 0.5) && (week3 <= area * 0.8)) {
    console.log("monitored");
} else {
    console.log("planted");
}