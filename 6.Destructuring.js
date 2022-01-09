/*
    Destructuring-
                In destructuing assignment we can extract value from array and objects in to a distinct variables.
*/

// array destructuring 
let myarr=["kishan kumar saini",23,12,true,566,889,"hello"]
let [uname,uage,...rest]=myarr;
console.log(uname, uage);
console.log(...rest);



console.log('Object destructuring');
let myobj={
    name:'kishan kumar saini',
    age:[21,23],
    mobno:{tel:9026598095,phone:9517554228},
}

let {name:n,age:a,mobno:m}=myobj
console.log(n, a, m);
console.log(n, a[0], m.tel);