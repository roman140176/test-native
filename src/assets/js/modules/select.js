
let select = document.querySelector('.product-box__select'),
    sizes = select.querySelector('.product-box__sizes'),
    radios = sizes.querySelectorAll('.product-box__radio'),
    selectName = select.querySelector('.product-box__select-name')

    const toggleSelect = () => {
        select.classList.toggle('active')
        sizes.classList.toggle('active')
      }
export const sizeSelect = () => {
    select.addEventListener('click',(e)=>{
        toggleSelect()
    })

    document.addEventListener('click', e => {
        let target = e.target;
        let its_select = target == select || select.contains(target);
        let its_sizes = target == sizes;
        let menu_is_active = select.classList.contains('active');
        
        if (!its_select && !its_sizes && menu_is_active) {
            toggleSelect();
        }
      })

      for(let radio of radios){
          radio.addEventListener('change',e=>{
              selectName.textContent = e.target.value
              select.classList.remove('active')
              sizes.classList.remove('active')
          })
      }
    }