(function () {
    'use strict';

    const str = '<p><strong>お問い合わせ</strong>はこちら<a href="contact.html"><img src="faq.jpg"></img></a></p>';

    console.log('貪欲マッチ');
    const re = /<.+>/g;
    const results = str.match(re);
    for (const result of results) {
        console.log( result );
    }

    console.log('最短マッチ');
    const re2 = /<.+?>/g;
    const results2 = str.match(re2);
    for (const result2 of results2) {
        console.log( result2 );
    }

    console.log('閉じカッコ除外');
    const re3 = /<[^>]+>/g;
    const results3 = str.match(re3);
    for (const result3 of results3) {
        console.log( result3 );
    }

})();
