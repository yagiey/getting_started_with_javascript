(function () {
    'use strict';

    class Member {
        static cache;

        static {
            this.cache = new Map();
        }

        constructor(name) {
            this.name = name;
        }

        // インスタンスを生成するための静的メソッド
        static of(name) {
            // キャッシュが存在するならば、そのまま返す
            if (this.cache.has(name)) {
                return this.cache.get(name);
            }

            // さもなければ、新規インスタンスを生成＆キャッシュに登録
            const m = new Member(name);
            this.cache.set(name, m);
            return m;
        }
    }

    const m1 = Member.of('田中譲二');
    const m2 = Member.of('田中譲二');

    console.log(m1 === m2);

})();
