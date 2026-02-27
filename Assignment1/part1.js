// 1. Convert the string "123" to a number and add 7. (0.5 Grade)

let str = "123";
let num = Number(str);
let result = num + 7;
console.log(result);


// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)

function checkValid(value) {
    if (!value) {
        return "Invalid";
    }
    return "Valid";
}

console.log(checkValid(0));


// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}


// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)

let numbers = [1, 2, 3, 4, 5];

let evenNums = numbers.filter(function(n) {
    return n % 2 == 0;
});

console.log(evenNums);


// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ....7 = Saturday). (0.5 Grade)

function getDay(num) {
 switch(num) {
    case 1:
        return "Sunday";
    case 2:
        return "Monday";
     case 3:
        return "Tuesday";
    case 4:
        return "Wednesday";
    case 5:
        return "Thursday";
    case 6:
        return "Friday";
     case 7:
        return "Saturday";
    }
}
console.log(getDay(2));

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)

let words = ["a", "ab", "abc"];

let lens = words.map(function(word) {
    return word.length;
});
console.log(lens);


// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)

function checkDiv(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return "Divisible by both";
    }
    else if (n % 3 == 0) {
        return "Divisible by 3";
    }
    else if (n % 5 == 0) {
        return "Divisible by 5";
    }
    else {
        return "Not divisible";
    }
}

console.log(checkDiv(15));
// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)

let square = (x) => x * x;
console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)

function formatPerson(obj) {
    let {name, age} = obj;
    return name + " is " + age + " years old";
}

let person = {name: "John", age: 25};
console.log(formatPerson(person));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)

function sumAll(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)

function waitThreeSeconds() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Success");
        }, 3000);
    });
}

waitThreeSeconds().then(function(msg) {
    console.log(msg);
});

// 13. Write a function to find the largest number in an array. (0.5 Grade)

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 3, 7, 2, 4]));

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)

function getKeys(obj) {
    let keysArr = [];
    for (let k in obj) {
        keysArr.push(k);
    }
    return keysArr;
}
console.log(getKeys({name: "John", age: 30}));

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)

function splitString(str) {
    return str.split(" ");
}

console.log(splitString("The quick brown fox"));
