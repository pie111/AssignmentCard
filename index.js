import data from './data.json' assert {type:'json'};
// console.log(data);
// document.getElementById("name1").innerHTML = data[0].name;
// document.getElementById("age1").innerHTML = data[0].age;
// document.getElementById("car1").innerHTML = data[0].car;

// document.getElementById("name2").innerHTML = data[1].name;
// document.getElementById("age2").innerHTML = data[1].age;
// document.getElementById("car2").innerHTML = data[1].car;

// document.getElementById("name3").innerHTML = data[2].name;
// document.getElementById("age3").innerHTML = data[2].age;
// document.getElementById("car3").innerHTML = data[2].car;

// document.getElementById("name4").innerHTML = data[3].name;
// document.getElementById("age4").innerHTML = data[3].age;
// document.getElementById("car4").innerHTML = data[3].car;

// for(var i=0;i<length(data);i++){
  
// }

document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'container';
  div.innerHTML = 'Hi there! how are you';
  div.className = 'border pad';

  document.body.appendChild(div);
}, false);