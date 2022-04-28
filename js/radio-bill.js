// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const lable = document.querySelectorAll(".billItem");
const addBtn3 = document.querySelector(".radioBillAddBtn");
const callTotal3 = document.querySelector(".callTotalTwo");
const smsTotal3 = document.querySelector(".smsTotalTwo");
const billTotal3 = document.querySelector(".totalTwo");
const color = document.querySelector(".orange");

addBtn3.addEventListener("click", function () {
  const radioBill = document.querySelector(".billItemTypeRadio:checked");
  if (radioBill.value === "call") {
    callTotal3.innerHTML = (Number(callTotal3.innerHTML) + 2.75).toFixed(2);

    billTotal3.innerHTML = (Number(billTotal3.innerHTML) + 2.75).toFixed(2);
  }
  if (radioBill.value === "sms") {
    smsTotal3.innerHTML = (Number(smsTotal3.innerHTML) + 0.75).toFixed(2);

    billTotal3.innerHTML = (Number(billTotal3.innerHTML) + 0.75).toFixed(2);
  }
  color.classList.remove("warning");
  colorSetting.classList.remove("danger");
  if (Number(billTotal3.innerHTML) >= 30 && Number(billTotal3.innerHTML) < 50) {
    color.classList.add("warning");
  } else if (Number(billTotal3.innerHTML) >= 50) {
    color.classList.add("danger");
  }
});
