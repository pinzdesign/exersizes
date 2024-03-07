function changeColor(event) {
    let mousePosY = event.pageY;
    let viewHeight = window.innerHeight;
    let viewPct = Math.floor(mousePosY / viewHeight * 100);

    //console.log("mouse position" + mousePosY);

    //console.log(viewPct);
    document.querySelector("body").style.backgroundColor = "hsl(" + viewPct + " 50% 50%)";
}

document.addEventListener("mousemove", function() {
    changeColor(event);
});

///////// Netflix button
document.querySelector("#aniButton").addEventListener("animationend", function() {
    document.querySelector("#video").style.display = "block";
});

