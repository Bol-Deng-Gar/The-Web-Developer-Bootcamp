const btn2 = document.querySelector("#v2");

btn2.onclick = function () {
  console.log("You clicked me!")
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("BUTTON 3 Has been CLICKED")
})
