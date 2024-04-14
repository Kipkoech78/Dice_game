var randomno1= Math.floor(Math.random()*6+1);
var changeattribute1= "images/dice"+randomno1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",changeattribute1);

var randomno2= Math.floor(Math.random()*6+1);
var changeattibute2= "images/dice"+randomno2+".png";
image2 = document.querySelectorAll("img")[1].setAttribute("src",changeattibute2);


if(randomno1> randomno2){
    document.querySelector("h2").innerHTML="<i class='fas fa-flag'></i> Player 1 Wins!";
}
else if(randomno1 < randomno2){
    document.querySelector("h2").innerHTML="Player 2 Wins! <i class='fas fa-flag'></i>";
}
else{
    document.querySelector("h2").innerHTML="Draw!";
}
