// Global Variables
const colorcontainer = document.querySelector(".colorcontainer")
const color = document.querySelector('.color')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.slidervalue')

// Changes color of input=color and makes its so user can interact with it
colorcontainer.addEventListener("click",()=>{
    color.click()
    adaptiveColorChange()
})
function adaptiveColorChange(){
    color.addEventListener('input',()=>{
        colorcontainer.style.backgroundColor = color.value
    })
}
//Changes numbers above slider
slider.addEventListener('input',()=>{
    sliderValue.textContent =`${slider.value} x ${slider.value}`
})

