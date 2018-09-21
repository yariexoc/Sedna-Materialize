document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed')
  var options = {
      inDuration: 400

  }
  
  var instances = M.Materialbox.init(elems, options)
  AOS.init({
      once:true
  });
  var elems = document.querySelectorAll('.carousel')
  
   
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instance = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    })
    
    arrowright.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.next()
    })
    arrowleft.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.prev()
    })
   
  
  let nav = document.querySelector('nav')

  var scroll = document.querySelectorAll('.scrollspy')
  var scrolloffset={
  scrollOffset: 0,
  throttle:1
}

var scrollInstances = M.ScrollSpy.init(scroll,scrolloffset)



  window.addEventListener('scroll', () => {
      if (window.scrollY>20) {
          console.log(nav)
          nav.parentElement.style.background = "#232731"
          nav.style.border = "0"
          nav.style.padding = "15px 0"
      } else {
          nav.parentElement.style.background = "transparent"
          nav.style.padding = "30px 0"  
          nav.style.borderBottom = "1px #aaa solid"        
      }

     
  })
  $('.light-box1').hide();
  $('#open1').click(function(){
      $('.light-box1').show();
  })
  $('#close1').click(function(){
      $('.light-box1').hide();
  })
  $('.light-box2').hide();
  $('#open2').click(function(){
      $('.light-box2').show();
  })
  $('#close2').click(function(){
      $('.light-box2').hide();
  })
  $('.light-box3').hide();
  $('#open3').click(function(){
      $('.light-box3').show();
  })
  $('#close3').click(function(){
      $('.light-box3').hide();
  })
  

    

  
})




