const quantity = document.getElementById('quantity')
let quantityVal = quantity.value
let price = document.getElementById('price')
let date = new Date();
date.setDate(date.getDate());

window.onload = (event) => {
  calculateCost()
}

function calculateCost() {
  if (quantityVal === '0') {
    price.innerText = '$64'
  } else if (quantityVal === '1') {
    price.innerText = '$90'
  } else if (quantityVal === '2') {
    price.innerText = '$108'
  } else if (quantityVal === '3') {
    price.innerText = '$135'
  } else if (quantityVal === '4') {
    price.innerText = '$162'
  }
}

quantity.addEventListener('change', (event) => {
  quantityVal = quantity.value;
  calculateCost();
})

$(function() {
  $('#datepicker').datepicker({
    format: "dd/mm/yyyy",
    orientation: "bottom",
    startDate: date
  });
});
