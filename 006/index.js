function a(){
    function c(){
        console.log(b);
    }
    c();           //--------------------------------------------------------------------|____swap will swap
    var d = 4;     //--------|__ swap will log undefined to console on place of 4--------|    the order of printing.
    console.log(d);//--------|
}
var b = 9;//---------|_____swap will log undefined to console on place of 9.
a();      //---------|