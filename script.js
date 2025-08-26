let clearHistoryBtn = document.querySelector("#clearHistoryBtn");
console.log(clearHistoryBtn);


// CLEAR BUTTON FUNCTIONALITY
clearHistoryBtn.addEventListener("click",function(){
    let cardContainer = document.querySelector("#cardContainer");
    console.log(cardContainer);
    cardContainer.innerHTML = " ";
})


// HEART ICON FUNCTIONALITY

let totaoHeart = 0 ;
let heartIcon = document.querySelectorAll("#heartIcon");
console.log(heartIcon);
function amplifyHearts(heartIconsIndex) {

heartIcon[heartIconsIndex].addEventListener("click", function(){
    console.log("mama")
    totaoHeart += 1;
    console.log(totaoHeart);
    console.log(typeof(totaoHeart));
    let countHeart = document.querySelector("#countHeart");
    console.log(parseInt(countHeart.innerText));
    crntHeart = totaoHeart + parseInt(countHeart.innerText);

    countHeart.innerText = crntHeart ;
     totaoHeart -= 1;
})
}

amplifyHearts(0);
amplifyHearts(1);
amplifyHearts(2);
amplifyHearts(3);
amplifyHearts(4);
amplifyHearts(5);
