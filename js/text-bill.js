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
  let currentCallTot = 0;
  let currentSmsTot = 0;
  let totalBill = 0;
  totElm.classList.remove("warning");
  totElm.classList.remove("danger");

  if (billText.value.toLowerCase() === "call") {
    currentCallTot = Number(callTotal.innerHTML) + 2.75;
    callTotal.innerHTML = currentCallTot.toFixed(2);
    totalBill = Number(billTotal2.innerHTML) + 2.75;
    billTotal2.innerHTML = totalBill.toFixed(2);
  }
  if (
    billText.value.toLowerCase() !== "call" ||
    billText.value.toLowerCase() !== "sms"
  ) {
    currentCallTot = Number(callTotal.innerHTML) + 0;
    callTotal.innerHTML = currentCallTot.toFixed(2);
    totalBill = Number(billTotal2.innerHTML) + 0;
    billTotal2.innerHTML = totalBill.toFixed(2);
  }
  if (billText.value.toLowerCase() === "sms") {
    currentSmsTot = Number(smsTotal.innerHTML) + 0.75;

    smsTotal.innerHTML = currentSmsTot.toFixed(2);
    totalBill = Number(billTotal2.innerHTML) + 0.75;
    billTotal2.innerHTML = totalBill.toFixed(2);
  }
  if (totalBill > 30 && totalBill <= 50) {
    totElm.classList.add("warning");
  }
  if (totalBill > 50) {
    totElm.classList.add("danger");
  }
});
