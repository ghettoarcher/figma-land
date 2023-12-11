var myObj = new Object();
var propertyName = "make";

propertyName1 = "model";
myObj[propertyName1] = "Mustang";

myObj[propertyName] = "Ford";

console.log(Object.getOwnPropertyNames(myObj));