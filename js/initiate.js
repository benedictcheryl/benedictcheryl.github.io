/*function loadpage() {
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
}*/

/* Trigger submit upon Enter key */
var inviteCodeBox = document.getElementById("inviteCode");
inviteCodeBox.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        loadpage();
    }
});

function loadpage() {
    var boxoverlay = document.getElementById("overlay");
    var pass2 = inviteCode.value;
    if (pass2.toLowerCase() == "wedding") {
        boxoverlay.classList.add("disappear");
        boxoverlay.classList.remove("blackout");
        window.scrollTo(0, 0);
    }
    else {
        alert("Invite code not recognized, please try again");
    }
}