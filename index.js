
var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;

var i1="images/dice"+p1+".png";
var i2="images/dice"+p2+".png";


if(p1>p2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
    document.querySelector(".img1").setAttribute("src",i1);
    document.querySelector(".img2").setAttribute("src",i2);

}
else if(p2>p1){
    document.querySelector("h1").textContent="Player 2 Wins";
    document.querySelector(".img2").setAttribute("src",i2);
    document.querySelector(".img1").setAttribute("src",i1);

}
else{
    document.querySelector("h1").textContent="Draw";
        document.querySelector(".img1").setAttribute("src",i1);
        document.querySelector(".img2").setAttribute("src",i2);
}
