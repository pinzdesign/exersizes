"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

// a new object template
const Animal = {
    name: "default",
    desc: "none",
    type: "unknown",
    age: 0
};

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // let's see whats there
        console.log(jsonData);
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        //console.log(jsonObject["fullname"]);

        // create a new object from template called Animal
        const animal = Object.create(Animal);

        // break up the full name from json, with space as delimiter
        let fullNameArray = jsonObject["fullname"].split(" ");
        //console.log(fullNameArray);

        // extract name, desc and type from splitted array
        let aName = fullNameArray[0];
        let aDesc = fullNameArray[2];
        let aType = fullNameArray[3];

        // assign the extracted name, desc and type to object
        animal.name = aName;
        animal.desc = aDesc;
        animal.type = aType;
        animal.age = jsonObject.age;

        // add newly created animal to all animals array
        allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


