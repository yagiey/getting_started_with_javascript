(function () {
    'use strict';

    class Member {
        #name = '';
        #age = 0;

        constructor(name = '名無権兵衛', age = 0) {
            this.#name = name;
            this.#age = age;
        }

        #createMessage() {
            return `私の名前は${this.#name}、${this.#age}歳です。`
        }

        // パブリックメソッド
        show() {
            console.log(this.#createMessage());
        }
    }

    const m = new Member('佐藤理央', 25);

    m.show()

    // console.log(m.#name);            // エラー
    // console.log(m.#createMessage()); // エラー

})();
