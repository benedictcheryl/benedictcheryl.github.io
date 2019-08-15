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

// Obfuscated code, remember to redo once password determined!
// var _0x2102=["\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6F\x76\x65\x72\x6C\x61\x79","\x76\x61\x6C\x75\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x77\x65\x64\x64\x69\x6E\x67","\x64\x69\x73\x61\x70\x70\x65\x61\x72","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x62\x6C\x61\x63\x6B\x6F\x75\x74","\x72\x65\x6D\x6F\x76\x65","\x73\x63\x72\x6F\x6C\x6C\x54\x6F","\x49\x6E\x76\x69\x74\x65\x20\x63\x6F\x64\x65\x20\x6E\x6F\x74\x20\x72\x65\x63\x6F\x67\x6E\x69\x7A\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E"];var inviteCodeBox=document[_0x2102[1]](_0x2102[0]);inviteCodeBox[_0x2102[4]](_0x2102[2],function(_0xf7f0x2){if(_0xf7f0x2[_0x2102[3]]=== 13){loadpage()}});function loadpage(){var _0xf7f0x4=document[_0x2102[1]](_0x2102[5]);var _0xf7f0x5=inviteCode[_0x2102[6]];if(_0xf7f0x5[_0x2102[7]]()== _0x2102[8]){_0xf7f0x4[_0x2102[11]][_0x2102[10]](_0x2102[9]);_0xf7f0x4[_0x2102[11]][_0x2102[13]](_0x2102[12]);window[_0x2102[14]](0,0)}else {alert(_0x2102[15])}}