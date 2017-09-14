$(document).ready(init);
function init(){
$("h1").click(gererclick);
function gererclick(){
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    console.log(this);
    $(this).css("color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
    console.log($(this).text());
}}

