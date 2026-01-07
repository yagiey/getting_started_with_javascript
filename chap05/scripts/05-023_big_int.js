console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);

// 数値演算の制限
//console.log(10n + 2); // エラー
console.log(10n / 3n);
console.log(10 / 3);

// 数値比較の制限
console.log(10n === 10);
console.log(10n == 10);
