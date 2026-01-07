let types = ['NFD', 'NFC', 'NFKD', 'NFKC'];
let list = ['ギガ', 'キ゛カ゛', 'ｷﾞｶﾞ', '㌐', 'キﾞカﾞ'];

for (const t of types) {
    console.log(`■${t}`);
    for (const l of list) {
        console.log(`${l} => ${l.normalize(t)}`);
    }    
}
