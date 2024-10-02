// The amount of additional space that would be required if the scientists were to start with 100 plants, 
// and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

const radius = 5; 
const minimumSpace = 0.8;
const PI = 3.1415;
const newSpace = minimumSpace * 100;
const predictedSpace = newSpace * 2**10; 
const result = Math.sqrt(predictedSpace / PI);
console.log(result);
