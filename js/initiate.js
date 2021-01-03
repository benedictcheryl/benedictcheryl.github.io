/* Trigger submit upon Enter key */
var entered = 0; // Single entry flag so Enter doesn't trigger scroll to 0 after entry
var inviteCodeBox = document.getElementById("inviteCode");
inviteCodeBox.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 && entered == 0) {  //checks whether the pressed key is "Enter" and still on entry page
        loadpage();
    }
});

// Verification
function loadpage() {
    var boxoverlay = document.getElementById("overlay");
    var body123 = document.getElementById("body123");
    var pass2 = inviteCode.value;
    if (pass2.toLowerCase() == "bencheryl" || pass2.toLowerCase() == "787326" || pass2.toLowerCase() == "248724" || pass2.toLowerCase() == "346637" || pass2.toLowerCase() == "248346") {
        boxoverlay.classList.add("disappear");
        boxoverlay.classList.remove("blackout");
        body123.classList.remove("BOinit");
        //enable_scroll();
        window.scrollTo(0, 0); 
        window.onscroll = function(){}; // remove scroll lock
        AOS.init(); // initialise animations
        entered = 1; // set entry flag as entered

        switch (pass2.toLowerCase()) {
            case "bencheryl":
              break;
            case "787326": /* stream only*/
                var church = document.getElementById("churchRSVP");
                church.classList.add("disappear");
                var dinner = document.getElementById("dinnerRSVP");
                dinner.classList.add("disappear"); 
                var church2 = document.getElementById("churchDetails");
                church2.classList.add("disappear");
                var dinner2 = document.getElementById("dinnerDetails");
                dinner2.classList.add("disappear"); 
                var rem = document.getElementById("rememberRSVP");
                rem.classList.add("disappear"); 
              break;
            case "248724": /* church only */
                var stream = document.getElementById("streamRSVP");
                stream.classList.add("disappear");
                var dinner = document.getElementById("dinnerRSVP");
                dinner.classList.add("disappear"); 
                var stream2 = document.getElementById("streamDetails");
                stream2.classList.add("disappear");
                var dinner2 = document.getElementById("dinnerDetails");
                dinner2.classList.add("disappear");
                var rem = document.getElementById("rememberRSVP");
                rem.classList.add("disappear"); 
              break;
            case "346637": /* stream and dinner */
                var church = document.getElementById("churchRSVP");
                church.classList.add("disappear");
                var church2 = document.getElementById("churchDetails");
                church2.classList.add("disappear");
              break;
            case "248346": /* church and dinner */
                var stream = document.getElementById("streamRSVP");
                stream.classList.add("disappear");
                var stream2 = document.getElementById("streamDetails");
                stream2.classList.add("disappear");
            break;
        }
    }
    else {
        alert("Invite code not recognized, please try again");
    }
}