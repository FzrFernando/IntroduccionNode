const helpers = require("./helpers");
const moreHelpers = require("./moreHelpers");
const evenMoreHelpers = require("./evenMoreHelpers");
const { suma } = require("./function");
const { user } = require("./models");
helpers.sayHi();

console.log(moreHelpers.firstName);
moreHelpers.sayHello();
moreHelpers.sayGoodbye();

evenMoreHelpers(); // ¡esto es una función por sí sola!

console.log(suma(3,5));

console.log(user);