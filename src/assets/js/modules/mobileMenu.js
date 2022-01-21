

const toggler = document.querySelector('.header__toggler')
const mobile_menu = document.querySelector('.menu-mobile')
const closeMenuMobile = document.querySelector('.menu-mobile__close')
export const mobileMenu = () => {
    toggler.addEventListener('click', () => {
        mobile_menu.classList.add('active')
    })
    closeMenuMobile.addEventListener('click',() => {
        mobile_menu.classList.remove('active')
    })

    document.addEventListener('mouseup', e => {
        if(e.target.className != 'header__toggler'){
            mobile_menu.classList.remove('active')
        }
    })
}