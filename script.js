let clearHistoryBtn = document.querySelector("#clearHistoryBtn");
console.log(clearHistoryBtn);

let callHistory = [];


// CLEAR BUTTON FUNCTIONALITY
clearHistoryBtn.addEventListener("click",function(){
    let cardContainer = document.querySelector("#cardContainer");
    console.log(cardContainer);
    cardContainer.innerHTML = " ";
    callHistory = [];
})





// HEART + COPY ICON FUNCTIONALITY

let totaoHeart = 0 ;
let heartIcon = document.querySelectorAll("#heartIcon");
let copyBtn = document.querySelectorAll("#copyBtn");
let increamentCopy = 0 ;

function amplifyHearts(heartIconsIndex) {

heartIcon[heartIconsIndex].addEventListener("click", function(){
    
    totaoHeart += 1;
    
    let countHeart = document.querySelector("#countHeart");
    
    crntHeart = totaoHeart + parseInt(countHeart.innerText);

    countHeart.innerText = crntHeart ;
     totaoHeart -= 1;
      
})
     copyBtn[heartIconsIndex].addEventListener("click", function(){
        increamentCopy += 1;

        let countCopy = document.querySelector("#countCopy");
        console.log(countCopy.innerText);
        
        let crntCopy = parseInt(countCopy.innerText) + increamentCopy;

        countCopy.innerText = crntCopy;
        increamentCopy -= 1;
        console.log("mamu")

        alert(`Copied Number : ${number[heartIconsIndex].innerText}....`)

       
   
    navigator.clipboard.writeText(number[heartIconsIndex].innerText)
         })
        }

for(let i = 0 ;i<=5; i++){
    amplifyHearts(i);
}






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
            alert("you have not sufficient balance to call.Your minimum  Balance have to 20 ")
         }else{
                 let crntCoin =  parseInt(coin.innerText) - totalCoin ;

                 coin.innerText = crntCoin ;

                  totalCoin -= 20 ;
                    alert(`${callIcon.innerText} calling ${service[serviceIndex].innerText} ${number[numberIndex].innerText}....`)

                   let  history = {
            services : service[serviceIndex].innerText,
            number : number[numberIndex].innerText,
            time : new Date().toLocaleTimeString()
         }

         callHistory.push(history);
         

         if(parseInt(coin.innerText) >= totalCoin){
                   let cardContainer = document.querySelector("#cardContainer");
                    
                   cardContainer.innerHTML = " ";
                   for(let history of callHistory){
                    let div = document.createElement("div");
                    cardContainer.appendChild(div);
                    div.innerHTML = `<div id="card " class="flex flex-row justify-between items-center bg-gray-200 m-2.5 p-1.5 rounded-2xl">
                <div >
                    <h3 class="font-bold"> ${history.services}   </h3>
                <p class="opacity-55"> ${history.number}  </p>
                </div>
                <p class="opacity-55">${history.time}</p>
                </div>`

                cardContainer.appendChild(div);
                   }
         }           
         }   
})

}

for(let i = 0 ;i<=5; i++){
    changecoins(i,i,i);
}



// COPY FUNCTIONALITY


