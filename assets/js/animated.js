let show_blur = document.getElementById('show-blur');
let blur_segment = document.getElementById('blur-segment')
let nav = document.querySelector('.nav')
let left = document.querySelectorAll('#left')
let right = document.querySelectorAll('#right')
let slider = document.querySelectorAll('.slider')
let borderLeft = document.getElementById('border-left');
let img_border = document.querySelectorAll('.img-border')
let f_bold = document.querySelector('.img-border .text-white.f-bold');
let btn_search = document.querySelector('.btn-search')
let category = document.getElementById('category')
let cart_icon = document.getElementById('cart-icon')
let segment_cart = document.querySelector('.segment-cart')
let img_card = document.querySelectorAll('.img-card')
let preview = document.getElementById('preview')
// btn_search.addEventListener('click',()=>{
//     alert(category.value)
// })
preview.setAttribute('src',img_card.item(0).children.item(0).getAttribute('src'))
img_card.forEach((element)=>{
    element.addEventListener('click',()=>{
        var attr = element.children.item(0).getAttribute('src')
        preview.setAttribute('src',attr);
       // element.style.backgroundColor = "red"
    })
})
 img_border.forEach((element)=>{
    element.addEventListener('mouseenter',()=>{
        element.style.backgroundColor = '#6eb325'
        element.nextElementSibling.style.color = '#6eb325';
       })
 })
img_border.forEach((element)=>{
    element.addEventListener('mouseleave',()=>{
        element.style.backgroundColor = "initial"
        element.nextElementSibling.style.color = "white"
       })
})
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
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  let enter = 0 ; //utiliser pour detecter les etapes sur l'icon cart du panier
cart_icon.addEventListener('mouseenter',()=>{
    enter = 1 ;
    segment_cart.style.display = "block"
})
cart_icon.addEventListener('mouseleave',async ()=>{
   if(enter == 0){
    await delay(2000)
    segment_cart.style.display = "none"
   }
})

segment_cart.addEventListener('mouseenter',()=>{
    enter = 2 ;
     segment_cart.style.display = "block"
});
segment_cart.addEventListener('mouseleave',async ()=>{

    await delay(500)
    segment_cart.style.display = "none"
    enter = 0;
});


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
          $('.menu .item')
            .tab()
            ;
  
        //   $('#cart-icon').mouseenter(()=>{
        //     $('.segment-cart').transition = '1s'
        //       $('.segment-cart').toggle()
        //   })
        //    $('#cart-icon').mouseleave(()=>{
        //       $('.segment-cart').toggle()
        //   })
  
           $('.menu .item')
            .tab()
          ;
      })