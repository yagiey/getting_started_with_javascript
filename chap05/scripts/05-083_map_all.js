(function () {
    'use strict';

    const data = new Map();
    data.set('1st', 'ファースト');
    data.set('2nd', 'セカンド');
    data.set('3rd', 'サード');
    data.set('4th', 'よん');

    for (const key of data.keys()) {
        console.log( key );
    }

    for (const value of data.values()) {
        console.log( value );
    }

    for (const [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
    }

    for (const [key, value] of data) {
        console.log(`${key}: ${value}`);
    }

    // keys, values, entries の戻り値はイテレーターであり、配列ではない。
    // 配列にしたい場合は、fromメソッドで明示的に変換する。
    console.log( data.keys() );
    console.log( Array.from( data.keys() ) );

})();
