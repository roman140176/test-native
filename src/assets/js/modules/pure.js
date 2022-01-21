export const  fadeOut = (el,num = 10) => {
    var opacity = 1
    var timer = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(timer);
        el.style.display = "none"
      }
      el.style.opacity = opacity
      opacity -= opacity * 0.1
    }, num)
    
  }