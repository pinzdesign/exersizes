const catName = "Mandu";
const humanName = "Peter";

console.log("My name is " + humanName);
console.log('I have a cat called ' + catName);
console.log(`Cats name ${catName}`);

const len = humanName.length;
console.log("Length is: " + len);

const firstLetter = humanName[0];

console.log("First letter is: " + firstLetter);

const wizName = "Albus Percival Wulfric Brian Dumbledore";
const wizLength = wizName.length;

console.log("Characters: " + wizName.length);
console.log("Second letter is: " + wizName[1]);
console.log("6th character: " + wizName[5]);
console.log("Capital D in Dumbledore is:" + wizName.indexOf("D"));
console.log("Last e index is: " + wizName.lastIndexOf("e"));

const str1 = "   There is space here \n  ";
console.log(str1.trim());

console.log(wizName.substring(0,5));
console.log(wizName.substring(29));
console.log(wizName.substring(14,22));

// opgave 3
const someName = "Albert Einstein";
const length = someName.indexOf(" ");
console.log(length);
console.log("Last letter is: ");

console.log(someName[5]);

// opgave 7

// is 9 long, so add 3 spacings
const foo = "Some text";
const letters = foo.length;
console.log(letters);

const added = foo.padStart(20, " ");
console.log(added);

const httpAddress1 = "https://";
const httpAddress2 = "http://";

function isSecure(address) {
    if(address.startsWith("https://")) {
        console.log("Is secure");
    }
    else {
        console.log("Not secure");
    }
}

isSecure(httpAddress2);

// opgave 19
const germanName = "Goethestraße";
const replaced = germanName.replace("ß", "ss");
console.log(replaced.toUpperCase());