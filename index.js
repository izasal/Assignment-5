// function sound(){
//     var snd = new Audio("xmassong.mp3");
//     snd.play();
// }


let star = "";
for (let i = 0; i < 10; i++){
    document.getElementById("new_sample").innerHTML += star + "<br>";
    star = star + "   *   ";
}

function lights(){
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let redbluegreen = "rgb(" + red + "," +green+ "," + blue + ")";
document.body.style.color = redbluegreen;
document.getElementById("rgb_values").textContent = redbluegreen;

}


function start(){
    go = setInterval(lights, 1000);
}

function stop(){
    clearInterval(go);
}

