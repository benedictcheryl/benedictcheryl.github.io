// Get the modal
var modal = document.getElementById("myModal");
var modal_din = document.getElementById("myModal_din");

// Get the button that opens the modal
var btn = document.getElementById("submitForm");
var btn_din = document.getElementById("submitForm_din");

// Get the <span> element that closes the modal
var span = document.getElementById("close");
var span_din = document.getElementById("close_din");

// Get the RSVP form
var rsvp = document.getElementById("rsvpForm");
var rsvp_din = document.getElementById("rsvpForm_din");

// When the user clicks on the button, open the modal 
function checkRSVP() {
	// Get the RSVP name
	var rsvpname = document.getElementById("rsvpname").value;
	var greeting = document.getElementById("greeting");
  greeting.innerHTML = rsvpname;
	modal.style.display = "block";
}
function checkRSVP_din() {
	// Get the RSVP name
	var rsvpname_din = document.getElementById("rsvpname_din").value;
	var greeting_din = document.getElementById("greeting_din");
  greeting_din.innerHTML = rsvpname_din;
	modal_din.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  rsvp.reset();
}
span_din.onclick = function() {
  modal_din.style.display = "none";
  rsvp_din.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    rsvp.reset();
  }
} //no idea why the second modal closing works but the first doesn't T^T
window.onclick = function(event) {
  if (event.target == modal_din) {
    modal_din.style.display = "none";
    rsvp_din.reset();
  }
}