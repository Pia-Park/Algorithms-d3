// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;

const sqrThree = (radius) => {
    return radius * radius * radius;
};

const sqrTwo = (radius) => {
    return radius * radius;
};

const sphereVolume = function (radius) {
  // Code here!
  let result = (4 / 3) * PI * sqrThree(radius);
  return result;
};
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);



const coneVolume = function (radius, height) {
  // And here!
  let result = (1 / 3) * PI * sqrTwo(radius) * height;
  return result;
};
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);



const prismVolume = function (height, width, depth) {
  // Probably here too!
  let result = height * width * depth;
  return result;
};
console.log(prismVolume(3, 4, 5) === 60);







