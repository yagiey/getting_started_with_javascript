(function () {
    'use strict';

    const obj = Object.create(
        Object.prototype,
        {
            name: {
                value: '佐藤理央',
                writable: true,
                configurable: true,
                enumerable: true,
            },
            age: {
                value: 25,
                writable: false,
                configurable: true,
                enumerable: false,
            },
            gender: {
                value: 'male',
                writable: true,
                configurable: true,
                enumerable: true,
            },
        }
    );

    const propNames = Object.keys(obj);
    for (const propName of propNames) {
        console.log( Object.getOwnPropertyDescriptor(obj, propName) );
    }

    console.log('-------------------------');

    const propNames2 = Object.getOwnPropertyNames(obj);
    for (const propName2 of propNames2) {
        console.log( Object.getOwnPropertyDescriptor(obj, propName2) );
    }

    console.log('-------------------------');

    for (const propName2 of propNames2) {
        console.log(propName2, '列挙可能？: ', obj.propertyIsEnumerable(propName2));
    }

    console.log('-------------------------');

    console.log( Object.getOwnPropertyDescriptors(obj) );
})();
