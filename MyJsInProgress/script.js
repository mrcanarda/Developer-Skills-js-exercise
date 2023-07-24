"use strict";

const temperatures = [6, -4, -15, -4, "error", 14, 21, 16, 22, 34, 9, 5];

const calcTemAmplite = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTemAmplite(temperatures);
console.log(amplitude);

const average = [34, 45, 46, 14, 23, 25, 30, "invalid", 35, 50, 46];
const averagePrufung = function (prufung) {
  let max = prufung[0];
  let min = prufung[0];

  for (let i = 0; i < prufung.length; i++) {
    const curTemp = prufung[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const uniprufung = averagePrufung(average);
console.log(uniprufung);

const deepl = [23, 45, 32, 76, 34, 23, 56, "invaled", 32, 45, 12, 32, 12];

const deeplTime = function (time) {
  let max = time[0];
  let min = time[0];

  for (let i = 0; i < time.length; i++) {
    const curTemp = time[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const usersDeeplTime = deeplTime(deepl);
console.log(usersDeeplTime);

const deeplTimeNew = function (t1, t2) {
  const time = t1.concat(t2);
  console.log(time);

  let max = time[0];
  let min = time[0];

  for (let i = 0; i < time.length; i++) {
    const curTemp = time[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const usersDeeplTimeNew = deeplTimeNew([3, 4, 5], [6, 9, 3]);
console.log(usersDeeplTimeNew);
