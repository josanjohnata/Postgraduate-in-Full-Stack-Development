let totalValue = [0, 0];
let productValue = [50.00, 30.00];
let qty = [0, 0];

function addItem(item) {
  let quantity = document.getElementById('qty' + item);
  let total = document.getElementById('total' + item);
  
  qty[item] += 1;
  totalValue[item] = Number.parseFloat(productValue[item]) * qty[item];
  quantity.innerHTML = qty[item];
  total.innerHTML = totalValue[item].toFixed(2);
  
  totalValueBuy()
};

function removeItem(item) {
  if(qty[item] > 0) {
    qty[item] -= 1;
    let quantity = document.getElementById('qty' + item);
    let total = document.getElementById('total' + item);

    quantity.innerHTML = qty[item]
    totalValue[item] = Number.parseFloat(productValue[item]) * qty[item];
    total.innerHTML = totalValue[item].toFixed(2);
    
    totalValueBuy()
  }
};

function totalValueBuy() {
  let amountValueBuy = document.getElementById('totalValueBuy');
  let initialValue = 0;

  for(let i = 0; i < totalValue.length; i++) {
    initialValue += totalValue[i];
  }

  amountValueBuy.innerHTML = initialValue.toFixed(2);
};