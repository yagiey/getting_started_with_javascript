let dt = new Date(2022, 4, 15, 20, 40);
console.log(dt);
dt.setMonth( dt.getMonth() + 1 ); // 来月の
dt.setDate( 0 ); // 0日目
console.log(dt);
