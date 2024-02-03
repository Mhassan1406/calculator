var displayinput=document.getElementById("displayinput")
function getVal(a){
    displayinput.value+=a;
}
function calculate(){
displayinput.value=eval(displayinput.value)
}
function clearAll(){
    displayinput.value="";
}