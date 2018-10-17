function addnumber(number){
document.getElementById("display").value += number;
}
function calculate(){
if(isNaN(eval(document.getElementById("display").value))){
document.getElementById("display").value = "Fehler";
} else{
document.getElementById("display").value = eval(document.getElementById("display").value);
}
return false;
}