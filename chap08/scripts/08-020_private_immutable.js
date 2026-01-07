(function () {
    'use strict';

    class Member {
        #name = '';
        #birth = new Date();

        constructor(name, birth) {
            this.#name = name;
            this.#birth = new Date(birth.getTime());
            Object.freeze(this);
        }

        get name() {
            return this.#name;
        }

        // 参照型を返すゲッター
        get birth() {
            // 防衛的コピー
            return new Date(this.#birth.getTime());
        }

        show () {
            // ゲッターを利用してもいいし、プライベートメンバーを直接触ってもいい
            console.log(`私の名前は${this.name}、誕生日は${this.birth.toDateString()}です。`);
        }

        withName(name) {
            return new Member(name, this.birth);
        }
    }
    Object.freeze(Member.prototype);

    const m = new Member('佐藤理央', new Date(2022, 7, 15));
    m.show();

})();
