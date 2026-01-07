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

    obj.x = 108;
    console.log('obj: ' , obj);
    console.log('parent: ', parent);

    let result = delete obj.x;
    console.log(result);
    console.log('obj: ' , obj);
    console.log('parent: ', parent);


    result = delete obj.x;
    console.log(result);
    console.log('obj: ' , obj);
    console.log('parent: ', parent);

})();
