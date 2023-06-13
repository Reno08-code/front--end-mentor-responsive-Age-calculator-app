
const btn = document.querySelector("#submit-btn")
const dayInput = document.getElementById("day");/* get the input elements*/
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayOutput = document.getElementById("DD");/*get the output elements*/  
const monthOutput = document.getElementById("MM");
const yearOutput = document.getElementById("YY");
const form = document.querySelector("form");/*get the form*/

let currentDate = new Date(); /*current date */
  let day = date.getDate();/*Get day as a number (1-31)*/
  let month = date.getMonth() + 1;/* Note: 0=January, 1=February because month start with index 0,so the current month is +1*/
  let year = date.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];






function validateInp() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    
    if (!i.value) {
      i.classList.add(
        "invalid"
      ); /* question: if I select the error p and stored it in a variable called error in a global scope,
                                and ,below ,I just set error.style.disply = block, isn't easier??*/
      parent.querySelector("p").innerText = "this field is required.";
      parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (monthInput.value < 0) {
      monthInput.parentElement.querySelector("p").innerText =
        "must be valid month.";
        parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (dayInput.value < 0) {
      dayInput.parentElement.querySelector("p").innerText =
        "must be valid day.";
        parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    } else if (yearInput.value < 0){
      yearInput.parentElement.querySelector("P").innerText = "must be valid year.";
      parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    }
    else {
      i.classList.remove("invalid");
      parent.querySelector("p").innerText = "";
      parent.querySelector("label").style.color = "hsl(0, 1%, 44%)"
      validator = true;
    }
  });
  return validator;
}

 /* btn.addEventListener("click",validateInp); this one is working */ 



function calculateAge() {
  
  let inputDay = dayInput.value;
  let  inputMonth = monthInput.value;
   let inputYear = yearInput.value;
  if (validateInp()) {
   if(inputDay > day){
    day = inputDay +months[month -1];
    month = month -1;
   }
   if(inputMonth > month){
    month = month +12;
    year = year -1;
   }
   let d = day - inputDay;
   let m = month - inputMonth;
   let y = year - inputYear;

   dayOutput.innerHTML = d;
   monthOutput.innerHTML = m;
   yearOutput.innerHTML = y;
}

}

form.addEventListener("submit", calculateAge);






