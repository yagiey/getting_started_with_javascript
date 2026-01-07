(function () {
    'use strict';

    const LogMixin = {
        showProperties() {
            // 現在のインスタンスの内容を列挙
            for (const [key, value] of Object.entries(this)) {
                console.log(`${key}: ${value}`);
            }
        },
    }

    class Hamster {
        name = 'まめ';
        gender = 'male';
        age = 2;
    }

    // ミックスインを組み込み
    Object.assign(Hamster.prototype, LogMixin);

    const m = new Hamster();
    m.showProperties();

})();
