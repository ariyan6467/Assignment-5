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

function amplifyHearts(heartIconsIndex) {

heartIcon[heartIconsIndex].addEventListener("click", function(){
    
    totaoHeart += 1;
    
    let countHeart = document.querySelector("#countHeart");
    
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



// CALL BUTTON FUNCTIONALITY

let callBtn = document.querySelectorAll("#callBtn");

let service = document.querySelectorAll("#service");
let number = document.querySelectorAll("#number");
let callIcon = document.querySelector("#callIcon");

let totalCoin = 0 ;

function  changecoins(callBtnIndex,serviceIndex,numberIndex){

    callBtn[callBtnIndex].addEventListener("click", function(){
   totalCoin += 20 ;
    let coin = document.querySelector("#coin");
    console.log(coin);
         if(parseInt(coin.innerText) < totalCoin){
            alert("you have not sufficient balance to call")
         }else{
                 let crntCoin =  parseInt(coin.innerText) - totalCoin ;

                 coin.innerText = crntCoin ;

                  totalCoin -= 20 ;

    
    
                    alert(`${callIcon.innerText} calling ${service[serviceIndex].innerText}   ${number[numberIndex].innerText}....`)
         }
    
})

}


changecoins(0,0,0);
changecoins(1,1,1);
changecoins(2,2,2);
changecoins(3,3,3);
changecoins(4,4,4);
changecoins(5,5,5);
