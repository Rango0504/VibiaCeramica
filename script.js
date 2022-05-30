let flag = 0;
const nav = document.querySelector(".navButtons");
const bars = document.querySelector("#bars");
bars.addEventListener("click", ()=>{
  if(flag==0){
    nav.classList.add("navButtonsMobile");
    bars.classList.add("rotate");
    flag++;
  }
  else{
    nav.classList.remove("navButtonsMobile");
    bars.classList.remove("rotate");
    flag--;
  }
});

const swiper = new Swiper('.swiper',{
    speed: 1400,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }
  }
);