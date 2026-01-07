(function () {
    'use strict';

    class Member {
        constructor(name = '名無権兵衛', age = 0) {
            Object.assign(this, {name, age});
        }

        show() {
            console.log(`私の名前は${this.name}、${this.age}歳です。`);
        }
    }

    const m = new Member('佐藤理央', 25);
    m.show();

})();
