// Global Variables
const colorcontainer = document.querySelector(".colorcontainer")
const color = document.querySelector('.color')
const slider = document.querySelector('.slider')
const sliderText = document.querySelector('.slidertext')
const sketchpad = document.querySelector('.sketchpad')
const clear = document.querySelector('.clear')
const eraser = document.querySelector('.eraser')
let eraserOn = false
startSketch()


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
    startSketch()
})
// function that makes it so user can draw on screen
function startSketch(){
    const pixels = document.querySelectorAll('.pixel')
    if(eraserOn === false){
        pixels.forEach((pixel)=>{
            pixel.addEventListener('mouseover',()=>{
                pixel.style.backgroundColor = color.value
            })
        })
    }
    else{
        pixels.forEach((pixel)=>{
            pixel.addEventListener('mouseover',()=>{
                pixel.style.backgroundColor = '#ffffff'
            })
        })
    }
}
// clears sketchpad when clear button is clicked
clear.addEventListener('click',()=>{
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel)=>{
        pixel.style.backgroundColor = "#ffffff"
    })
})
//Checks if button is clicked if so turns eraser on and off accordingly
eraser.addEventListener('click',()=>{
    if(eraserOn === false){
        eraser.style.backgroundColor = "#909090"
        eraserOn = true
        startSketch()
    }
    else{
        eraser.style.backgroundColor = "#e0e0e0"
        eraser.classList.add('.eraser')
        eraserOn = false
        startSketch()
    }
})