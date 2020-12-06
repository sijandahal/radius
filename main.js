let button = document.querySelector('.btn');
let form = document.querySelector('.form');
let input = document.querySelector('.text');
let cicrumfrence = document.querySelector('.cicrumfrence')


button.addEventListener('click', function(e) {
  e.preventDefault();
  var radius = input.value;
  if (radius == '') {
    alert('Please enter a value')
  }
  console.log(radius);
  calcCircumfrence();
});

function calcCircumfrence(radius)  {
  var radius = input.value;
  let answer = 2 * 3.142857 * radius;
  console.log(answer);
  cicrumfrence.innerHTML+= answer;
}
//find the array and return  a new value

let array = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]

console.log(array);
var index = array.indexOf('Kathmandu')
console.log(index);
if(index > -1) {
  array.splice(index, 1)
}
console.log(array);


