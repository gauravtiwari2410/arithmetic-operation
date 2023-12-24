const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const textBox = document.getElementById('box');

//OR
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');

function displayButtonText(button){
    alert(button.innerText);
}
function changeText(element) {
  element.innerText = "Now content has been changed"; // Change the button text
  element.style.backgroundColor="red"
  alert("Content has been changed"); // Display an alert after changing the text
}


btn1.addEventListener('click', function() {
    displayButtonText(btn1);
  });

  btn2.addEventListener('click', function() {
    displayButtonText(btn2);
  });

  btn3.addEventListener('click', function() {
    displayButtonText(btn3);
  });

  btn1.addEventListener('click', function() {
    changeText(textBox);
  });

