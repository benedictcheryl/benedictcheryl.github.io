var weddingdate = new Date("Dec 5, 2020 10:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = weddingdate - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d "
        + hours + "h " + minutes + "m " + seconds + "s " + "to go!";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "We're married!";
    }
}, 1000); 
