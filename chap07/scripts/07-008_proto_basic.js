(function () {
    'use strict';

    const parent = {
        x: 10,
        y: 20,
    };

    const obj = Object.create(
        parent,
        {
            z: {
                value: 30,
                writable: true,
                configurable: true,
                enumerable: true,
            },
        }
    );

    console.log( obj );
    console.log( Object.getPrototypeOf(obj) );
    for (const prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }

    console.log( obj.x, obj.y );

    console.log('Object.hasOwnメソッドの動き');
    for (const prop in obj) {
        const msg = Object.hasOwn(obj, prop) ? '独自プロパティ' : 'プロトタイプのプロパティ';
        console.log(`${prop}: ${msg}`);
    }
    console.log('hasOwnPropertyメソッドの動き');
    for (const prop in obj) {
        const msg = obj.hasOwnProperty(prop) ? '独自プロパティ' : 'プロトタイプのプロパティ';
        console.log(`${prop}: ${msg}`);
    }

    console.log("'z' in obj: ", 'z' in obj);
    console.log("'x' in obj: ", 'x' in obj);

})();
