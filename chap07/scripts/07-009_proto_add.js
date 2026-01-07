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

    parent.v = 42;
    for (const prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }

})();
