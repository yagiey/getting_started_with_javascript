(function () {
    'use strict';

    const obj = { hoge: 1, foo: { bar: 100 } };
    const copied = _.cloneDeep(obj);

    obj.foo.bar = 99;
    console.log('obj: ', obj);
    console.log('copied: ', copied);

})();
