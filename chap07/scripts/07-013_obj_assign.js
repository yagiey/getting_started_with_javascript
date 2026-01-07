(function () {
    'use strict';

    const pet = {
        type: 'スノーホワイトハムスター',
        name: 'キラ',
        description: {
            birth: '2014-02-15',
        },
    };

    const pet2 = {
        name: '山田きら',
        color: '白',
        description: {
            food: 'ひまわりのタネ',
        },
    };

    const pet3 = {
        weight: 42,
        photo: 'http://www.wings.nsn.to/img/ham.jpg'
    }

    Object.assign(pet, pet2, pet3);
    console.log(pet);

    
    // 元のオブジェクトに影響を及ぼしたくない場合
    const merged = Object.assign({}, pet, pet2, pet3);
    console.log(merged);

    // スプレッド構文でも同じことができる
    const merged2 = {...pet, ...pet2, ...pet3};
    console.log(merged2);

})();
