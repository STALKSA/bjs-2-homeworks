"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b * b - 4 * a * c;

  if(discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (a * 2);
    arr.push(root);
  } else {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number", 
    typeof contribution !== "number",
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  // Преобразование процентной ставки в диапазон от 0 до 1
  percent = percent / 100;
  // Преобразование годовой ставки в месячную
  let monthlyPercent = percent / 12;

  // Расчет тела кредита
  let creditBody = amount - contribution;

  // Расчет ежемесячного платежа
  let monthlyPayment =
    creditBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Расчет общей суммы, которую придется заплатить клиенту
  let totalPayment = monthlyPayment * countMonths;

  // Округление результата до двух знаков после запятой
  totalPayment = parseFloat(totalPayment.toFixed(2));

  return totalPayment;
}