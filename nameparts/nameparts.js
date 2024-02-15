function breakName() {
    let fullName = document.querySelector("#fullName").value;
    console.log(fullName);

    firstNameEnd = fullName.indexOf(" ");
    console.log(firstNameEnd);

    firstName = fullName.slice(0, firstNameEnd);
    console.log(firstName);

    lastNameEnd = fullName.lastIndexOf(" ");
    console.log(lastNameEnd);

    lastName = fullName.slice(lastNameEnd);
    console.log(lastName);

    middleName1 = fullName.replace(firstName, "");
    middleName2 = middleName1.replace(lastName, "");

    // another way of doing this
    middleName22 = fullName.substring(firstNameEnd, lastNameEnd);

    if(middleName22 = "") {
        middleName22 = "-";
    }

    console.log(middleName22.trim());

    document.querySelector("#firstName").innerHTML = firstName;
    document.querySelector("#middleName").innerHTML = middleName22;
    document.querySelector("#lastName").innerHTML = lastName;
}

document.querySelector("#go").addEventListener("click", breakName);