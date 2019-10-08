var $form = $('form#rsvpForm'),
url = 'https://script.google.com/macros/s/AKfycbzgJWtB6i8UKXMniWI7ITCJztTyd7HfaegflIy5PYE2u0OunxEw/exec'

$('#submit-form').on('click', function(e) {
alert("Success!");
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "POST",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})
