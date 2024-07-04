let inputSlider= document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let btn =document.getElementById("btn");
let copy= document.getElementById("copy");


sliderValue.textContent= inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent= inputSlider.value;
});

btn.addEventListener('click', ()=>{
    passBox.value=generatePassword();
});
let lowerChars= "abcdefghijklmnopqrstuvwxyz";
let upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let AllNumbers= "0123456789";
let AllSymbols= "~!@#$%^&*"
function generatePassword(){
    let genPassword="";
    let allchars="";


    allchars += lowercase.checked ? lowerChars : "";
    allchars += uppercase.checked ? upperChars : "";
    allchars += numbers.checked ? AllNumbers : "";
    allchars += symbols.checked ? AllSymbols : "";

    if(allchars== "" || allchars.length==0){
        return genPassword;
    }

    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
    return genPassword;
}

copy.addEventListener('click', ()=>{
    if(passBox.value!="" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copy.innerText="check";
        copy.title="Password Copied!";
        setTimeout(() => {
            copy.innerHTML="content_copy";
            copy.title="";
        }, 3000);
    }
});