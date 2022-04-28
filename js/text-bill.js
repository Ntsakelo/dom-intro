// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//DOM Variables
const billText = document.querySelector(".billTypeText");
const callTotal = document.querySelector(".callTotalOne");
const smsTotal = document.querySelector(".smsTotalOne");
const billTotal2 = document.querySelector(".totalOne");
const addBtn = document.querySelector(".addToBillBtn");
const totElm = document.querySelector(".red");

//add event listener and bill function
addBtn.addEventListener("click", function () {
  if (billText.value.toLowerCase() === "call") {
    callTotal.innerHTML = (Number(callTotal.innerHTML) + 2.75).toFixed(2);
    billTotal2.innerHTML = (Number(billTotal2.innerHTML) + 2.75).toFixed(2);
  }
  if (billText.value.toLowerCase() === "sms") {
    smsTotal.innerHTML = (Number(smsTotal.innerHTML) + 0.75).toFixed(2);

    billTotal2.innerHTML = (Number(billTotal2.innerHTML) + 0.75).toFixed(2);
  }
  if (
    billText.value.toLowerCase() !== "call" ||
    billText.value.toLowerCase() !== "sms"
  ) {
    callTotal.innerHTML = (Number(callTotal.innerHTML) + 0).toFixed(2);
    smsTotal.innerHTML = (Number(smsTotal.innerHTML) + 0).toFixed(2);
    billTotal2.innerHTML = (Number(billTotal2.innerHTML) + 0).toFixed(2);
  }
  totElm.classList.remove("warning");
  totElm.classList.remove("danger");
  if (Number(billTotal2.innerHTML) >= 30 && Number(billTotal2.innerHTML) < 50) {
    totElm.classList.add("warning");
  }
  if (Number(billTotal2.innerHTML) >= 50) {
    totElm.classList.add("danger");
  }
});
