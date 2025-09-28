function generateRandomNumber(min,max){

    return Math.floor(Math.random() * (max-min+1)+min);
}

document.getElementById("generateButton").addEventListener("click",function(){
    var min=1;
    var max=1000;
    var randomnumber=generateRandomNumber(min,max);
    document.getElementById("result").textContent=randomnumber;
})