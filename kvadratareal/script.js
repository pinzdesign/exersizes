function countArea(lod, vand) {
    areal = lod * vand;
    return areal;
}

function square() {
    lod = document.querySelector("#lod").value;
    vand = document.querySelector("#vand").value;

    areal = countArea(lod, vand);
    document.querySelector("#areal").innerHTML = areal;

    document.querySelector("#square").style.width = vand + "px";
    document.querySelector("#square").style.height = lod + "px";
}

document.querySelector("#count").addEventListener("mousedown", square);