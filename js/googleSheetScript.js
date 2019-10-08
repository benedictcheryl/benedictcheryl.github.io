var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbzgJWtB6i8UKXMniWI7ITCJztTyd7HfaegflIy5PYE2u0OunxEw/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})