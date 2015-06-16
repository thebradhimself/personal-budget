var moneyInput = document.getElementById('money_made');
var moneyButton = document.getElementById('money_made_button');
var totalMoney = 0;

moneyButton.addEventListener('click',function(){
  totalMoney += Number(moneyInput.value);
  document.getElementById("money_coming_in").innerHTML = "$ " + totalMoney;
  document.getElementById("money_left_over").innerHTML = "$ " + (totalMoney - totalBills);
});



var billButton = document.getElementById('money_lost_button');
var totalBills = 0;

billButton.addEventListener('click',function(){

  for(var i = 0; i < totalBillsSoFar; i++){

    var billInput = document.getElementById('money_lost['+ i +']');  

    totalBills += Number(billInput.value);
    document.getElementById("money_going_out").innerHTML = "$ " + totalBills;
    document.getElementById("money_left_over").innerHTML = "$ " + (totalMoney - totalBills);
  }
});

var addBillButton = document.getElementById('add_more_bills');
var totalBillsSoFar = 1;

addBillButton.addEventListener('click', function(){

  var div = document.createElement("div");
  div.innerHTML = '<input type="number" id="money_lost['+totalBillsSoFar+']" placeholder="Bill" />';
  document.getElementById('the_bills').appendChild(div);
  totalBillsSoFar++;

});
