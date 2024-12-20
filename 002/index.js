console.log(x);
var x = 7;

a();
// y();// shows error aerow function behaves as variable untill decliered
// z();// shows error aerow function behaves as variable untill decliered
console.log(a);
function a(){
    console.log(8);
    /* console.log(3); */
    /* return 3; */ // there a difference between these two ;in case we do not return any thing one extra line is printed;
}
console.log(y);
var y = () => {
    console.log("y");
}

console.log(z);
var z = function(){
    console.log(z);
}
console.log(x);
console.log("\n");
console.log(a());
console.log(y);
console.log(z);
a();
y();