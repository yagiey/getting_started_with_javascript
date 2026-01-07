let dt1 = new Date(2022, 10, 15);
let dt2 = new Date(2022, 11, 20);
let diffMs = dt2.getTime() - dt1.getTime();
let diffDt = diffMs / (1000 * 60 * 60 * 24);
console.log(`${diffDt}日の差があります。`);
