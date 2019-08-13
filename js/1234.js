function loadpage() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Invite Code',' ');
    while (testV < 3) {
    if (!pass1) 
        history.go(-1);
    if (pass1.toLowerCase() == "wedding") {
        alert('You Got it Right!');
        window.open("wedding.html","_self");
        break;
    } 
    if (pass1.toLowerCase() == "dinner") {
        alert('You Got it Right!');
        window.open("dinner.html","_self");
        break;
    } 
    testV+=1;
    var pass1 = 
    prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
    history.go(-1);
    return " ";
}