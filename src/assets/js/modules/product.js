

const cartButton = document.querySelector('.product-box__addCart')
const favoriteButton = document.querySelector('.product-box__favorite')
const quantityInput = document.querySelector('.product-box__quantity-input')
let quantity = parseInt(quantityInput.value)

const productimage = document.querySelector('.product-box__img').querySelector('picture')
const productName = document.querySelector('.product-box__title').textContent
const productPrice = document.querySelector('.product-box__price-new').innerHTML

let count = '0'

const modalNotify = document.createElement('div')
      modalNotify.classList.add('modal-notify')
const backdrop = document.createElement('div')
backdrop.classList.add('backdrop')


const clearContent = async () => {
    
    backdrop.remove()
    modalNotify.classList.remove('closed')
    modalNotify.remove()
    modalNotify.innerHTML = ''
    document.body.classList.remove('overfolow')
}

const updateWidget = (e) => {
    const widget = e.currentTarget.dataset.widget
    const widgetBox = document.querySelector(widget)
    quantity = parseInt(quantityInput.value)
    count = widgetBox.textContent

    widgetBox.innerHTML = +count + parseInt(quantityInput.value)

    widgetBox.classList.add('active')
    
}

export const productButtons = () => {

    cartButton.addEventListener('click',(e)=>{
       
        clearContent()
        updateWidget(e)

        let  modallInnerContent = `<div class="modal-content">
                                        <div class="modal-img">
                                            ${productimage.outerHTML}
                                        </div>
                                        <div class="modal-info">
                                            <h3>Вы купили <strong>${productName}</strong></h3>
                                            <p>${+count + parseInt(quantityInput.value)} шт. по цене:<span class="modal-price">${productPrice}</span></p>

                                            <div class="modal-buttons">
                                                <span class="modal-close">Продолжить покупки</span>
                                                <span class="modal-cart-redirect">Перейти в корзину</span>
                                            </div>
                                            
                                        </div>
                                    </div>`
        modalNotify.insertAdjacentHTML('afterbegin',modallInnerContent)
        backdrop.insertAdjacentElement('beforeend',modalNotify)
        document.body.insertAdjacentElement('beforeend',backdrop)
        document.body.classList.add('overfolow')

           
    })

    document.addEventListener('click',(e) => {
        if(e.target.className === 'modal-close' || e.target.className === 'backdrop'){
           document.querySelector('body .modal-notify').classList.add('closed')   
           setTimeout(()=>{
            clearContent()
           },500)
                     
        }
    })

    favoriteButton.addEventListener('click',(e)=>{
        const widget = e.currentTarget.dataset.widget
        const widgetBox = document.querySelector(widget)

        count = widgetBox.textContent     
        
        let  modallInnerContent = `<div class="modal-content modal-content--favorite">
                                        <div class="modal-favorite">
                                            <h3>
                                            ${widgetBox.classList.contains('active') ? 'Успешно удалено из избранных' : 'Товар добавлен в избранные'}
                                            </h3>
                                        </div>
                                    </div>`

        if(!widgetBox.classList.contains('active')){
            widgetBox.innerHTML = +count + 1
        }else{
            widgetBox.innerHTML = +count - 1
        }        

        widgetBox.classList.toggle('active')

        modalNotify.insertAdjacentHTML('afterbegin',modallInnerContent)
        backdrop.insertAdjacentElement('beforeend',modalNotify)
        document.body.insertAdjacentElement('beforeend',backdrop)
        document.body.classList.add('overfolow')

        setTimeout(()=>{
            clearContent()
           },3000)
        
    })

}