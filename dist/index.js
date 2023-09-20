"use strict";
console.log("hello-world");
let nfagggme = "gdfgfgfdfgdfgdfg";
let c = 455;
let arr = [];
arr.forEach(n => n);
let user = [2, "hello"];
let user2 = [2, "hello", true, 5];
const small = 1;
const meduim = 2;
const large = 3;
;
let mysize = 2;
console.log(mysize);
function calc(income) {
    console.log(income);
}
calc(1);
function calc1(income) {
    return 0;
}
calc(1);
function calc2(income) {
    if (income > 5)
        return income * 2;
    return income;
}
calc2(2);
function calc3(income) {
    let x;
    if (income > 5)
        return income * 2;
    return income;
}
calc3(1);
function calc4(income, taxed = 2) {
    if (income > 5)
        return taxed * 2;
    return income;
}
calc4(1);
let employe = {
    id: 1,
    name: "alaa",
    retire: (date) => {
        console.log("HELLO", date);
    }
};
employe.age = 5;
console.log(employe);
let emp = {
    id: 1,
    name: "salma",
    retire: (data) => {
        console.log("hello");
    }
};
function KgTobs(weight) {
    if (typeof weight == "number")
        return weight * 2;
    else {
        return parseInt(weight) * 2;
    }
}
console.log(KgTobs(10));
console.log(KgTobs("10kg"));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else { }
    console.log("hola");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
let customerOne = getCustomer(0);
console.log(customerOne?.birthday);
let customerTwo = getCustomer(2);
console.log(customerTwo?.birthday.getFullYear);
console.log(customerTwo);
function getCustomer1(id) {
    return id === 0 ? null : { birthday: new Date };
}
let customerTwo1 = getCustomer(2);
console.log(customerTwo1?.birthday?.getFullYear);
let log = null;
log?.('a');
console.log(log?.('a'));
//# sourceMappingURL=index.js.map