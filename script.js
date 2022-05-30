//* Remove Cookies*//
function remove(){ 
    var Coockies = document.querySelector(".cookies-block");
    Coockies.remove();
}
//* Convert F to C and vise-versa *//
function FtoC (f){
    var c = Math.floor((f - 32) * 5/9);
    return c;
}
function CtoF (c){
    var f = Math.floor((c * 9/5) + 32);
    return f;
}
//* Change all listed temperatures to chosen type *//
function changeTemp(element) {
    var temperatures = document.querySelectorAll(".high span,.low span");
    if (element.value == "F"){
        for (var i = 0; i < temperatures.length; i++){
            temperatures[i].innerText = CtoF(temperatures[i].innerText);
        }
    } else {
        for (var i = 0; i < temperatures.length; i++){
            temperatures[i].innerText = FtoC(temperatures[i].innerText);
        }
    }
}
