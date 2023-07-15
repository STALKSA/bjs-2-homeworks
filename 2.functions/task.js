function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = sum / arr.length;
  const roundedAvg = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: roundedAvg };
}
 
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;

}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  const difference = sumEvenElement - sumOddElement;
  return difference;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  const average = sumEvenElement / countEvenElement;
  return average;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
