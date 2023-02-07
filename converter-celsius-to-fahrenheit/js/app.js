let $ = document
const title = $.querySelector('title')
const inputElem = $.querySelector('.convertor-input')
const resultText = $.querySelector('#result')
const celsiusSpan = $.querySelector('.celsius')
const fahrenheitSpan = $.querySelector('.fahrenheit')
const convertBtn = $.querySelector('.convert-btn')
const resetBtn = $.querySelector('.reset-btn')
const changeBtn = $.querySelector('.change-btn')



function convertHandler () {
    
    let inputValue = inputElem.value

    if (inputElem.value === ""){
        resultText.innerHTML = "Enter a NUMBER"
        resultText.style.color = "red"
    } else {

         if (celsiusSpan.innerHTML === "°C"){
        let celsiusResult =  (( inputValue * 9/5 ) + 32 ).toFixed(1)
        resultText.innerHTML = inputValue + "°C = "  + celsiusResult + "°F"
        resultText.style.color = "#3d096bea"
        inputElem.value = ''

        
    } else {
        let fahrenheitResult =  ((inputValue - 32)  * 5 / 9 ).toFixed(1)
        resultText.innerHTML = inputValue + "°F = " + fahrenheitResult + "°C"
        resultText.style.color = "#3d096bea"
        inputElem.value = ''
    }
  }
}


function resetHandler () {
    inputElem.value = ''
    resultText.innerHTML = ''
}


function changeHandler () {

    inputElem.value = ''
    resultText.innerHTML = ''

    if (celsiusSpan.innerHTML === "°C"){
        celsiusSpan.innerHTML = "°F"
        fahrenheitSpan.innerHTML = "°C"
        inputElem.setAttribute('placeholder' , "°F")
        title.innerHTML = "°F to °C"
    } else {
        celsiusSpan.innerHTML = "°C"
        fahrenheitSpan.innerHTML = "°F"
        inputElem.setAttribute("placeholder" , "°C")
        title.innerHTML = "°C to °F"
    }
}


convertBtn.addEventListener('click' , convertHandler)
resetBtn.addEventListener('click' , resetHandler)
changeBtn.addEventListener('click' , changeHandler)