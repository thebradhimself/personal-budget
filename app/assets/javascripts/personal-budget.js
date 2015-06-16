var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;

moneyButton.addEventListener('click',function(){
  totalMoney += Number(moneyInput.value);
  document.getElementById("money_coming_in").innerHTML = "$ " + totalMoney;
  document.getElementById("money_left_over").innerHTML = "$ " + (totalMoney - totalBills);
});

var billInput = document.getElementById('money_lost0');
var billInput1 = document.getElementById('money_lost1');
var billInput2 = document.getElementById('money_lost2');
var billInput3 = document.getElementById('money_lost3');
var billButton = document.getElementById('money_lost_button');
var totalBills = 0;

billButton.addEventListener('click',function(){

  totalBills += Number(billInput.value);
  totalBills += Number(billInput1.value);
  totalBills += Number(billInput2.value);
  totalBills += Number(billInput3.value);
  document.getElementById("money_going_out").innerHTML = "$ " + totalBills;
  document.getElementById("money_left_over").innerHTML = "$ " + (totalMoney - totalBills);
});

var addBillButton = document.getElementById('add_more_bills');
var totalBillsSoFar = 1;

addBillButton.addEventListener('click', function(){

  var div = document.createElement("div");
  div.innerHTML = '<input type="number" id="money_lost'+totalBillsSoFar+'" placeholder="Bill" />';
  document.getElementById('the_bills').appendChild(div);
  totalBillsSoFar++;

});
