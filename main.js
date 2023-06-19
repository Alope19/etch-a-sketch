// Global Variables
const colorcontainer = document.querySelector(".colorcontainer")
const color = document.querySelector('.color')
const slider = document.querySelector('.slider')
const sliderText = document.querySelector('.slidertext')
const sketchpad = document.querySelector('.sketchpad')


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
    sliderText.textContent =`${slider.value} x ${slider.value}`
})

// Removes any divs left when user changes slider value
slider.addEventListener('change',()=>{
    let pixelcontainer = document.querySelectorAll('.pixelcontainer')
    pixelcontainer.forEach( element =>{
        sketchpad.removeChild(element)
    })
//Reads slider value and creates divs accordingly
    for(i = 0; i < slider.value; i++){
        const div = document.createElement('div')
        div.classList.add('pixelcontainer')
        sketchpad.appendChild(div)
        for(j = 0; j < slider.value; j++){
            const div2 = document.createElement('div')
            div2.classList.add('pixel')
            div.appendChild(div2)

        }
    }
})
