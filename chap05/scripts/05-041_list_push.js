(function () {
    'use strict;'

    let list = ['松', '竹', '梅'];
    console.log(list);

    let ret = list.push('桜');
    console.log(ret, list);

    ret = list.unshift('桃', '杏')
    console.log(ret, list);

    ret = list.pop();
    console.log(ret, list);

    ret = list.shift();
    console.log(ret, list);

    // 複数の要素をまとめて追加
    {
        let l1 = ['松', '竹', '梅'];
        l1.push(['杉', '桐']);
        console.log(l1);

        let l2 = ['松', '竹', '梅'];
        l2.push(...['杉', '桐']);
        console.log(l2);
    }

    // 配列の連結
    // concatメソッドは非破壊的
    {
        let l1 = ['松', '竹', '梅'];
        console.log( l1.concat(['杉', '桐']) );
        console.log( l1.concat(['杉', '桐'], ['杏', '柿']) );
    }

    // pop / shift メソッドは要素を取り出す
    // 取り出すこと無しに、値を取得するのであれば、ブラケット構文、atメソッドを利用する。
    {
        console.log( list[0] );
        console.log( list.at(-1) );
    }

})();
