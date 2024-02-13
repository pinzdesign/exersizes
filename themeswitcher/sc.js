function changeTheme() {
    theme = document.querySelector("#themes").value;
    document.querySelector("body").dataset.theme = theme;
}

document.querySelector("#themes").addEventListener("change", changeTheme);