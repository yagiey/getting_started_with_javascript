import('./lib/util.js').then(util => {

    console.log(util.getTriangleArea(10, 2));

    const m = new util.Member('佐藤理央', 25);
    m.show();

});
