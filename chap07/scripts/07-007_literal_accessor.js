(function () {
    'use strict';

    const obj = {
        _name: '名無権兵衛',
        get name() { return this._name; },
        set name(value) { this._name = value; },
    };

    console.log('obj.name', obj.name );
    console.log('obj._name', obj._name );

    obj.name = '山田太郎';
    console.log('obj.name', obj.name );
    console.log('obj._name', obj._name );

})();
