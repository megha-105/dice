let set=[1,2,3,4,5,6];
var p1=Math.floor(Math.random(1,7)*10);
var p2=Math.floor(Math.random(1,7)*10);

if(p1>p2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice1.png");

}
else if(p2>p1){
    document.querySelector("h1").textContent="Player 2 Wins";
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    document.querySelector(".img1").setAttribute("src","images/dice4.png");

}
else{
    document.querySelector("h1").textContent="Draw";
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
