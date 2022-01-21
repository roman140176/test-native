
let thumnbale = document.querySelectorAll('.product-box__thumnbale'),
    mainImage = document.querySelector('.product-box__img').querySelector('picture'),
    styledMain= document.querySelector('.styled__main').querySelector('picture'),
    styledThumb = document.querySelectorAll('.styled__image')


const removeActives = (collection) =>{
    for(let col of collection){
        col.classList.remove('active')
    }
}

const viewFunc = (a,b) => {

    a.forEach(item => {
        item.addEventListener('click',e=>{
            b.innerHTML = e.currentTarget.querySelector('picture').innerHTML
            removeActives(a)
            e.currentTarget.classList.add('active')
        })
    })

}

export const imageView = () => {
    viewFunc(thumnbale,mainImage)
    viewFunc(styledThumb,styledMain)
}

