let show_blur = document.getElementById('show-blur');
let blur_segment = document.getElementById('blur-segment')
let nav = document.querySelector('.nav')
let left = document.querySelectorAll('#left')
let right = document.querySelectorAll('#right')
let slider = document.querySelectorAll('.slider')
let borderLeft = document.getElementById('border-left');
borderLeft.addEventListener('click',()=>{
    borderLeft.style.backgroundColor = "#8c4ad8"
    borderLeft.style.color = "white"
})
slider.forEach((element)=>{
    element.addEventListener('mouseenter',()=>{
        left.forEach((e)=>{
            e.style.transition = "0.5s"
            e.style.marginLeft = "40px"
        })
        right.forEach((e)=>{
            e.style.transition = "0.5s"
            e.style.marginRight = "40px"
        })
    })

    element.addEventListener('mouseleave',()=>{
        left.forEach((e)=>{
            e.style.transition = "0.5s"
            e.style.marginLeft = "initial"
        })

        right.forEach((e)=>{
            e.style.transition = "0.5s"
            e.style.marginRight = "initial"
        })
    })
})
hover = false ;
show_blur.addEventListener('mouseenter',()=>{
    hover = true ;
   blur_segment.style.display = "block"
})

show_blur.addEventListener('mouseleave',()=>{
    hover = !hover
   if(!hover){
    blur_segment.style.display = "block"
   }
})
blur_segment.addEventListener('mouseenter',()=>{
    hover = true
   blur_segment.style.display = "block"
})
blur_segment.addEventListener('mouseleave',()=>{
    hover = false;
    blur_segment.style.display = "none";
})
nav.addEventListener('mouseleave',()=>{
    hover = false
    blur_segment.style.display = "none";
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#right',
      prevEl: '#left',
    },
  
    // And if we need scrollbar
  
  });
  
  
      $(document).ready(function name(params) {
          $('.segment-cart').hide();
          $('.ui.dropdown')
          .dropdown()
          ;
  
          $('#bar').click(()=>{
              $('.ui.sidebar')
          .sidebar('toggle')
          ;
          })
  
          $('#cart-icon').mouseenter(()=>{
              $('.segment-cart').show()
          })
           $('#cart-icon').mouseleave(()=>{
              $('.segment-cart').hide()
          })
  
           $('.menu .item')
            .tab()
          ;
      })