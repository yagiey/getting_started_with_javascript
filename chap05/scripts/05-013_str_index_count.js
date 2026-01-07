let str = 'にわにはにわにわとりがいる';
let count = 0;
let keywd = 'にわ';

let pos = str.indexOf(keywd);
while (pos !== -1) {
    count++;
    // 前回のマッチ位置から検索を再開
    pos = str.indexOf(keywd, pos + keywd.length);
}
console.log(`${count}件がヒットしました。`);
