(function () {
    'use strict';

    const ranks = ['部長', '課長', '主任', '担当'];
    const members = [
        { name:'鈴木清子', rank:'主任' },
        { name:'山口久雄', rank:'部長' },
        { name:'井上太郎', rank:'担当' },
        { name:'和田和美', rank:'課長' },
        { name:'小森雄太', rank:'担当' },
    ]

    const fn = function (lhs, rhs) {
        const pos1 = ranks.indexOf(lhs.rank);
        const pos2 = ranks.indexOf(rhs.rank);
        return pos1 - pos2;
    }
    members.sort(fn);
    console.log(members);

})();
