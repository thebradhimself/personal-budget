var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;
moneyButton.addEventListener('click',function(){
  totalMoney += Number(moneyInput.value);
  document.getElementById("money_coming_in").innerhtml(totalMoney);
});



document.getElementById("money_going_out").innerhtml(totalBills);
document.getElementById("money_left_over").innerhtml(totalMoneyMinusTotalBills);
