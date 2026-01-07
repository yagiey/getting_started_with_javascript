(function () {
    'use strict';

    const member = {
        name: '佐藤理央',
        age: 18,
    };

    // ageプロパティの設定を更新
    Object.defineProperty(
        member,
        'age',

        {
            value: 25,
            writable: false,
            configurable: true,
            enumerable: true,
        }
    );

    // 新規にgenderプロパティを追加
    Object.defineProperty(
        member,
        'gender',
        {
            value: 'male',
            writable: true,
            configurable: true,
            enumerable: true,
        }
    );

    //member.age = 20;

    for (const key in member) {
        console.log(`${key}: ${member[key]}`);
    }

})();
