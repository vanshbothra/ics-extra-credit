document.getElementById("hide-button").addEventListener("click",function(){
    document.getElementById("hide-element").style.display="none";
    document.getElementById("show-button").style.display="block";
    document.getElementById("hide-button").style.display="none";
    // alert("Hello this is an alert!");
    // document.body.style="background-color:white";
});

document.getElementById("show-button").addEventListener("click",function(){
    document.getElementById("hide-element").style.display="block";
    document.getElementById("hide-button").style.display="block";
    document.getElementById("show-button").style.display="none";
    // alert("Hello this is an alert!");
    // document.body.style="background-color:white";
});