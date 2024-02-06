const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

function onlyElectric(obj) {
  if(obj.isElectric == true) {
    return obj;
  }
}

function onlyElectricOwner(obj) {
  if(obj.isElectric == true && obj.ownedBy == "Jonas") {
    return obj;
  }
}

function moreSeats(obj) {
  if(obj.passengers >= 2) {
    return obj;
  }
}

function moreSeatsFuel(obj) {
  if(obj.passengers >= 1 && obj.fuel == "Rugbrød") {
    return obj;
  }
}

function showTheseVehicles(arr, filterBy = null) {
  // clear the list from previus listing
  clearTable(ulPointer);
  // make a filtered array by using "filter" function, if no function is sent, show all without filtering
  if(filterBy != null) { filtered = arr.filter(filterBy); } else { filtered = arr; }
  
  filtered.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    if(each.fuel != null) {
      ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    }
    else {
      ulPointer.innerHTML += "<li></li>";
    }
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    if(each.stops != null) {
      ulPointer.innerHTML += `<li>${each.stops}</li>`;
    }
    else {
      ulPointer.innerHTML += "<li></li>";
    }
    if(each.ownedBy != null) {
      ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    }
    else {
      ulPointer.innerHTML += "<li></li>";
    }
    if(each.isElectric == true) {
      ulPointer.innerHTML += `<li><img src="checkmark.png" alt="checkmark"></li>`;
    }
    else {
      ulPointer.innerHTML += "<li></li>";
    }
    if(each.isTandem == true) {
      ulPointer.innerHTML += `<li><img src="checkmark.png" alt="checkmark"></li>`;
    }
    else {
      ulPointer.innerHTML += "<li></li>";
    }
  });
}

function clearTable(ulPointer) {
  while(ulPointer.firstChild) {
    ulPointer.removeChild(ulPointer.firstChild);
  }
}

const ulPointer = document.querySelector(".tableData");

document.querySelector("#filterElectric").addEventListener("mousedown", function() {
  // returns a string which i would need to convert to function, but it's not used at all, as i am adding event listener for each button
  // filter = document.querySelector("#filterBtn").dataset.filter;
  // console.log(filter + " is a " + typeof(filter));

  showTheseVehicles(vehicles, onlyElectric);
});

document.querySelector("#filterElectricOwner").addEventListener("mousedown", function() {
  showTheseVehicles(vehicles, onlyElectricOwner);
});

document.querySelector("#filterSeats").addEventListener("mousedown", function() {
  showTheseVehicles(vehicles, moreSeats);
});

document.querySelector("#filterSeatsFuel").addEventListener("mousedown", function() {
  showTheseVehicles(vehicles, moreSeatsFuel);
});

document.querySelector("#noFilter").addEventListener("mousedown", function() {
  showTheseVehicles(vehicles);
});