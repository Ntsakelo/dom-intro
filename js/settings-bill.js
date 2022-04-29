// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
const btnAdd = document.querySelector(".addSettings");
const updtBtn = document.querySelector(".updateSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const colorSetting = document.querySelector(".color");

let callCost = document.querySelector(".callCostSetting");
let smsCost = document.querySelector(".smsCostSetting");
let warningLevel = document.querySelector(".warningLevelSetting");
let criticalLevel = document.querySelector(".criticalLevelSetting");
updtBtn.addEventListener("click", function () {
  const smsBtn = document.querySelector(".sms");
  const callBtn = document.querySelector(".call");
  let thisAmount = Number(totalSettings.innerHTML);
  colorSetting.classList.remove("warning");
  colorSetting.classList.remove("danger");
  if (
    thisAmount >= Number(warningLevel.value) &&
    thisAmount < Number(criticalLevel.value)
  ) {
    colorSetting.classList.add("warning");
  } else if (thisAmount >= Number(warningLevel.value)) {
    colorSetting.classList.add("danger");
  }
  if (smsBtn.value === "SMS") {
    smsBtn.value = "sms";
  }
  if (callBtn.value === "CALL") {
    callBtn.value = "call";
  }
  if (callCost.value !== "") {
    callCost.value = Number(callCost.value);
  }
  if (smsCost.value !== "") {
    smsCost.value = Number(smsCost.value);
  }
  if (warningLevel.value !== "") {
    warningLevel.value = Number(warningLevel.value);
  }
  if (criticalLevel.value !== "") {
    criticalLevel.value = Number(criticalLevel.value);
  }
});

btnAdd.addEventListener("click", function () {
  const radioBtn = document.querySelector(".billItemTypeWithSettings:checked");
  let callPrice = Number(callTotalSettings.innerHTML);
  let smsPrice = Number(smsTotalSettings.innerHTML);
  let totalPrice = Number(totalSettings.innerHTML);
  if (totalPrice >= Number(criticalLevel.value) && radioBtn.value === "sms") {

    radioBtn.value = "SMS";
  }
  if (totalPrice >= Number(criticalLevel.value) && radioBtn.value === "call") {
    radioBtn.value = "CALL";

    radioBtn.value = "SMS";
  }
  if (totalPrice >= Number(criticalLevel.value) && radioBtn.value === "call") {
    radioBtn.value = "CALL";

    radioBtn.value = "";
  }
  if (totalPrice >= Number(criticalLevel.value) && radioBtn.value === "call") {
    radioBtn.value = "";
  }
  if (radioBtn.value === "call") {
    callPrice += Number(callCost.value);
    callTotalSettings.innerHTML = callPrice.toFixed(2);
  }
  if (radioBtn.value === "sms") {
    smsPrice += Number(smsCost.value);
    smsTotalSettings.innerHTML = smsPrice.toFixed(2);
  }

  if (
    callPrice >= 0 &&
    smsPrice >= 0 &&
    totalPrice <= Number(criticalLevel.value)
  ) {
    totalPrice = callPrice + smsPrice;
    totalSettings.innerHTML = totalPrice.toFixed(2);
  }
  if (
    totalPrice >= Number(warningLevel.value) &&
    totalPrice < Number(criticalLevel.value)
  ) {
    colorSetting.classList.add("warning");
  } else if (totalPrice >= Number(warningLevel.value)) {
    colorSetting.classList.add("danger");
  }
});
