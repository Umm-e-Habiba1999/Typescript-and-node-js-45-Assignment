// // // // // // // // // // // // // // // // // // // // // // // // // // // // //Q#1-2 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //task 1 : instalation completed
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function CreatorCar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var mycar = CreatorCar("toyota", "Fortuner", { color: "black", year: 2023 });
console.log(mycar);
