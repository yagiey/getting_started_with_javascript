let str1 = 'Wings';
let str2 = 'Ｗｉｎｇｓ';
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

// 地域対応のtoLocaleXxxxxメソッド
console.log(str1.toLocaleLowerCase('en-US'));
console.log(str1.toLocaleLowerCase(['tr', 'tr-TR']));

// 先頭文字を大文字化する
let msg = 'hELLo';
console.log(msg.substring(0,1).toUpperCase() + msg.substring(1).toLowerCase());
