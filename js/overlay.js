function loadpage() {
    var boxoverlay = document.getElementById("overlay");
    var testV = 1;
    var pass1 = prompt('Please Enter Your Invite Code', 'Invite Code');;
    while (testV < 3) {
        if (pass1.toLowerCase() == "wedding") {
            boxoverlay.classList.add("disappear")
            window.scrollTo(0, 0);
            break;
        }
        testV += 1;
        pass1 = prompt('Input Code Not Recognized, Please Try Again', 'Invite Code');
    }
    return " ";
}