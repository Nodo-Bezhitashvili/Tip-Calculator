const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const form = document.querySelector("form");
const totalTip = document.querySelector(".totalTip");

calculate.addEventListener("click", function () {
  let totalBill = document.querySelector(".billamt").value;
  let tipPercent = document.querySelector(".tipPercent").value;
  let split = document.querySelector(".split").value;

  if (totalBill === "" || tipPercent == 0 || split == 0) {
    alert("Please enret values");
    return;
  }

  let total = (totalBill * tipPercent) / split;
  total = total.toFixed(2);
  document.querySelector(".tip").innerHTML = "$" + total;

  let billAmt = Number(total) + Number(totalBill / split);
  billAmt = billAmt.toFixed(2);
  document.querySelector(".bill").innerHTML = "$" + billAmt;
});

reset.addEventListener("click", function () {
  form.reset();
  document.querySelector(".tip").innerHTML = "$ 0.00";
  document.querySelector(".bill").innerHTML = "$ 0.00";
  document.querySelector(".split").value = "";
});
