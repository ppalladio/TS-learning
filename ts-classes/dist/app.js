"use strict";
let user1;
user1 = {
    name: 'John',
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('whatever');
//# sourceMappingURL=app.js.map