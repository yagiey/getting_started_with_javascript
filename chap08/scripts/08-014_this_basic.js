(function () {
    'use strict';

    globalThis.name = '大山田';

    const member = {
        name: '小山田',
        greet() {
            console.log(`こんにちは、${this.name}さん！`);
        },
        greet2: () => console.log(`こんにちは、${this.name}さん。`),
    };

    function myHigher(fn) {
        fn();
        //fn.call(member);      // thisを束縛しつつ実行
        //fn.apply(member, []); // thisを束縛しつつ実行
    }

    member.greet();
    //myHigher(member.greet); // strictモードではエラー

    // bindメソッドでthisを束縛
    myHigher(member.greet.bind(member));

    member.greet2();

    //////////////////////////////////////////////////
    // thisとstrictモードの絡みがわからん。
    //////////////////////////////////////////////////

})();
