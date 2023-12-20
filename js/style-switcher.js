

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const bodySkin=document.querySelectorAll(".body-skin"),
totalBodySkin=bodySkin.length;
for(let i=0; i<totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function(){
        if(this.value == "dark"){
            document.body.className="dark";
        }
        else{
            document.body.className="";
        }
    })
}

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}