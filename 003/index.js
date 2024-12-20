var x = 1;
var z = 1000;
console.log(x);
a();
b();

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    function y(){
        console.log(x);
        console.log(z);
    }
    y();
}