(function () {
    'use strict';

    const obj = { hoge: 1, foo: { bar: 100 } };
    const copied = JSON.parse( JSON.stringify(obj) );

    obj.foo.bar = 99;
    console.log('obj: ', obj);
    console.log('copied: ', copied);

})();
