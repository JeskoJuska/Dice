function random(){
  var count_1 = Math.floor(Math.random()*6)+1;
  var count_2 = Math.floor(Math.random()*6)+1;

    var image_1 = "images\\dice" + count_1 + ".png";
    var image_2 = "images\\dice" + count_2 + ".png";

  document.querySelector("img.img1").setAttribute("src", image_1);
  document.querySelector("img.img2").setAttribute("src", image_2);

  if (count_1>count_2){
    document.getElementsByTagName("h1")[0].textContent="Player 1 wins!";
  } else if (count_2>count_1){

    document.getElementsByClassName("container")[0].removeChild(document.getElementsByTagName("h1")[0]);


var flag = document.createElement("img");
flag.classList.add("flag");
flag.src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/triangular-flag-on-post_1f6a9.png";
var text = document.createElement("h1");
text.textContent = "grdydytdytd";
text.classList.add("dice");
var header = document.createElement("div");
header.appendChild(flag);
header.appendChild(text);

document.getElementsByClassName("container")[0].insertBefore(header, document.getElementsByTagName("div")[1]);

    // document.getElementsByTagName("h1")[0].textContent="Player 2 wins!";
  } else{
    document.getElementsByTagName("h1")[0].textContent="Draw!";
  }
}

random();
