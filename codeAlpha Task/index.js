let btn =document.querySelectorAll(".btn button")
let card=document.querySelectorAll(".card")
btn.forEach((button)=>{
   button.addEventListener("click",(val)=>{
    let active =document.querySelector(".active")
    active.classList.remove("active")
    val.target.classList.add("active")
    
    card.forEach(cards=>{
    cards.classList.add("hide")
    if(cards.dataset.name===val.target.dataset.name || val.target.dataset.name==="all"){
        cards.classList.remove("hide")
    }
    })
   })
})