
const increment = document.querySelector('.product-box__increment')
const decriment = document.querySelector('.product-box__decriment')
const quantityIinput = document.querySelector('.product-box__quantity-input')

const max = 100
const min = 1

export const incrementHandler = () => {

    quantityIinput.addEventListener('input',e => {
        const {value} = e.target
        e.target.value = value.replace(/\D/g,'')

        if(parseInt(value) > max){
            e.target.value = max
        }
        if(parseInt(value) < min){
            e.target.value = min
        }
    })

    quantityIinput.addEventListener('blur',e => {
        const {value} = e.target
        e.target.value = value.replace(/\D/g,'')

        if(!e.target.value || e.target.value < min){
            e.target.value = min
        }
    })

    increment.addEventListener('click',(e) => {
        quantityIinput.value = parseInt(quantityIinput.value) + 1

        if(parseInt(quantityIinput.value) > max){
            quantityIinput.value = max
        }
    })
    decriment.addEventListener('click',(e) => {        

        if(parseInt(quantityIinput.value) > min){
            quantityIinput.value = parseInt(quantityIinput.value) - 1
        }
    })
}