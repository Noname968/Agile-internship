var accordion = document.querySelectorAll('.accorheader');

accordion.forEach(accitem =>{
    accitem.addEventListener('click',()=>{
        accitem.classList.toggle('active');
        const accb = accitem.nextElementSibling;
        if(accitem.classList.contains('active')){
            accb.style.maxHeight = accb.scrollHeight + "px" ;
        }
        else{
            accb.style.maxHeight = 0;
        }
    })
})

var swiper = new Swiper("#swiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#js-prev1",
      prevEl: "#js-next1",
    },
  });