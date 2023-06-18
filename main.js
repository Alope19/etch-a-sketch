// Changes color of input=color and makes its so user can interact with it
const colorcontainer = document.querySelector(".colorcontainer")
const color = document.querySelector('.color')

colorcontainer.addEventListener("click",()=>{
    color.click()
    adaptiveColorChange()
})
function adaptiveColorChange(){
    color.addEventListener('input',()=>{
        colorcontainer.style.backgroundColor = color.value
    })
}