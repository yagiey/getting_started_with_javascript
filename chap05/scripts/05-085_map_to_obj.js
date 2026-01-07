(function () {
    'use strict';

    const map = new Map([
        ['1st', 'ファースト'],
        ['2nd', 'セカンド'],
        ['3rd', 'サード'],
        ['4th', 'フォース']
    ]);

    console.log( Object.fromEntries(map) );

    ///////////////////////////////////////////
    // 配列をObject.fromEntriesに渡したらどうなる？
    ///////////////////////////////////////////

    // // これはエラー
    // const ar = [1, 2, 3, 4, 5];
    // console.log( Object.fromEntries(ar) ); // 1 はエントリーじゃない

    // これならOK
    const entries = [
        ['壱', 'いち'],
        ['弍', 'に'],
        ['参', 'さん'],
    ];
    console.log( Object.fromEntries(entries) );

    // 3つ目の値は無視される
    const entries2 = [
        ['壱', 'いち', 'ファースト'],
        ['弍', 'に', 'セカンド'],
        ['参', 'さん', 'サード'],
    ];
    console.log( Object.fromEntries(entries2) );

})();
