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
  if (callCost.value !== "") {
    let callValue = Number(callCost.value);
    callCost.value = callValue;
  }
  if (smsCost.value !== "") {
    let smsValue = Number(smsCost.value);
    smsCost.value = smsValue;
  }
  if (warningLevel.value !== "") {
    let warningValue = Number(warningLevel.value);
    warningLevel.value = warningValue;
  }
  if (criticalLevel.value !== "") {
    let criticalValue = Number(criticalLevel.value);
    criticalLevel.value = criticalValue;
  }
});

btnAdd.addEventListener("click", function () {
  let currentCost = 0;
  let newTotal = 0;
  colorSetting.classList.remove("warning");
  colorSetting.classList.remove("danger");
  const radioBtn = document.querySelector(".billItemTypeWithSettings:checked");
  if (radioBtn.value === "call") {
    currentCost = Number(callCost.value) + Number(callTotalSettings.innerHTML);
    callTotalSettings.innerHTML = currentCost.toFixed(2);

    newTotal = Number(callCost.value) + Number(totalSettings.innerHTML);
    totalSettings.innerHTML = newTotal.toFixed(2);
  }
  if (radioBtn.value === "sms") {
    currentCost = Number(smsCost.value) + Number(smsTotalSettings.innerHTML);
    smsTotalSettings.innerHTML = currentCost.toFixed(2);

    newTotal = Number(smsCost.value) + Number(totalSettings.innerHTML);
    totalSettings.innerHTML = newTotal.toFixed(2);
  }
  if (
    newTotal > Number(warningLevel.value) &&
    newTotal < Number(criticalLevel.value)
  ) {
    colorSetting.classList.add("warning");
  }
  if (newTotal > Number(criticalLevel.value)) {
    colorSetting.classList.add("danger");
  }
});
