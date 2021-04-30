'use strict';

// Scoping in Practice
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        if (birthYear >= 1981 && birthYear <= 1996) {
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);
            var millenial = true;
            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str); // Reference error because str is block scoped using str
        // console.log(millenial); // Works because var is function scoped
        // console.log(add(2, 3)); // Reference error because functions are block scoped in strict mode
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);*/
