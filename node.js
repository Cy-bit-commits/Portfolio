document.getElementById("checkboxInput").addEventListener("change", function(){
    const body = document.body;
    const main = document.querySelector('.main');
    
    console.log("Checkbox toggled: " + this.checked);
    
    if (this.checked) {
        body.classList.add("day");
        main.style.backgroundColor = "white";
        
        
    } else {
        body.classList.remove("day");
        main.style.backgroundColor = "black";
    }
});
