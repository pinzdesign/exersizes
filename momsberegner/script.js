function countPct(price, moms = 25) {
    pct = price / 100;
    pricemoms = pct * moms;
    return pricemoms;
}

function recountPrice() {
    price = document.querySelector("#price").value;
    momsPrice = countPct(price);
    finalPrice = parseFloat(momsPrice) + parseFloat(price);
    console.log("Moms er: " + momsPrice);
    console.log("Pris med moms: " + finalPrice);
    document.querySelector("#finalprice").innerHTML = finalPrice;
}

document.querySelector("#recount").addEventListener("mousedown", recountPrice);