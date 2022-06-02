
var v = Math.floor((Math.random() * 25) + 1);
var o = (v/2);
function strt(){
    document.getElementById('heading').style.display = "block";
    document.getElementById('play').style.display = "block";
    document.getElementById('start').style.display = "none";
}
function ply(){
    document.getElementById('task1').style.display = "block";
    document.getElementById('ok').style.display = "block";
    document.getElementById('heading').style.display = "none";
    document.getElementById('play').style.display = "none";
}
/*function okk(){
    document.getElementById('value').style.display = "block";
    document.getElementById('submit').style.display = "block";
    document.getElementById('task1').style.display = "none";
    document.getElementById('ok').style.display = "none";
}*/
function okk(){
    document.getElementById('i1').style.display = "block";
    document.getElementById('ib1').style.display = "block";
    document.getElementById('task1').style.display = "none";
    document.getElementById('ok').style.display = "none";
}
function ibb1(){
    document.getElementById('i2').style.display = "block";
    document.getElementById('ib2').style.display = "block";
    document.getElementById('i1').style.display = "none";
    document.getElementById('ib1').style.display = "none";
}
function ibb2(){
   
    document.getElementById('mynum').innerHTML = v;
    document.getElementById('i3').style.display = "block";
    document.getElementById('ib3').style.display = "block";
    document.getElementById('i2').style.display = "none";
    document.getElementById('ib2').style.display = "none";
}
function ibb3(){
    document.getElementById('i4').style.display = "block";
    document.getElementById('ib4').style.display = "block";
    document.getElementById('i3').style.display = "none";
    document.getElementById('ib3').style.display = "none";
}
function ibb4(){
    document.getElementById('i5').style.display = "block";
    document.getElementById('ib5').style.display = "block";
    document.getElementById('i4').style.display = "none";
    document.getElementById('ib4').style.display = "none";
}
function ibb5(){
    document.getElementById('out').innerHTML = o;
    document.getElementById('ans').style.display = "block";
    document.getElementById('ib5').style.display = "none";
    document.getElementById('i5').style.display = "none";
}