function random(){
  var count_1 = Math.floor(Math.random()*6)+1;
  var count_2 = Math.floor(Math.random()*6)+1;

    var image_1 = "images\\dice" + count_1 + ".png";
    var image_2 = "images\\dice" + count_2 + ".png";

  document.querySelector("img.img1").setAttribute("src", image_1);
  document.querySelector("img.img2").setAttribute("src", image_2);

  var flag;
  var text;

  if (count_1>count_2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";

  } else if (count_2>count_1){

document.querySelector("h1").innerHTML="Player 2 wins!🚩";
// flag = document.createElement("img");
// flag.classList.add("flag");
// flag.src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/triangular-flag-on-post_1f6a9.png";
// text = document.createElement("h1");
// text.textContent = "Player 2 wins!";
// text.classList.add("dice");
// var header = document.createElement("div");
// header.appendChild(text);
// header.appendChild(flag);
//
// document.getElementsByClassName("container")[0].insertBefore(header, document.getElementsByTagName("div")[1]);
  } else{
    document.getElementsByTagName("h1")[0].textContent="Draw!";
  }
}

random();
