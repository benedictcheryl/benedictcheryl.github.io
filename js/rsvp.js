// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rsvpButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the RSVP form
var rsvp = document.getElementById("rsvpForm");

// When the user clicks on the button, open the modal 
function checkRSVP() {
	// Get the RSVP name
	var rsvpname = document.getElementById("rsvpname").value;
	var greeting = document.getElementById("greeting");
	greeting.innerHTML = rsvpname;
	modal.style.display = "block";
	}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  rsvp.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    rsvp.reset();
  }
}