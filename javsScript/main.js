
// firing the owel carousel plugin
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({autoplay:true,
     autoplayHoverPause:true, loop:true,items:4,center:true,margin:40 , items:5,});
});

window.addEventListener("scroll", ()=>{
    let navi = document.getElementById('navi')
    navi.classList.toggle("scroll", scrollY > 0)
});


/*typing 
var typed = new Typed('.type', {
  strings: ['better', 'more efficient','stronger'],
  typeSpeed : 100,
  backSpeed : 100,
  loop : true
});*/

// navigator
$("a").click(function(){   
  var sectionId= $(this).attr("href");
  var positionOfSection = $(sectionId).offset().top;
  $("html , body").animate({scrollTop:positionOfSection},1000);
})

// animation on partners section
function animatePartner(){
  var partner = document.querySelector(".pertners")
  introPositionPartner = partner.getBoundingClientRect().top;
   
  var colum1 = document.querySelector(".owl-carousel") 

  partnerPosition = window.innerHeight / 2;

  if(introPositionPartner < partnerPosition){
    colum1.classList.add("animate__fadeIn","appear" )
}
}
window.addEventListener("scroll", animatePartner);


// animation on about-us section
function animatesupp(){
  var supplier = document.querySelector(".about")
  introPositionSupp = supplier.getBoundingClientRect().top;
   
  var ACcontent = document.querySelector(".about-content") 


  supPosition = window.innerHeight / 2;

  if(introPositionSupp < supPosition){
    ACcontent.classList.add("animate__fadeInUp","appear" )
}
}
window.addEventListener("scroll", animatesupp);


// animation on investmnets section
function animatInvest(){
  var supplier = document.querySelector(".investments")
  introPositionSupp = supplier.getBoundingClientRect().top;
   
  var InestBody = document.querySelector(".invest-para") 


  supPosition = window.innerHeight / 2;

  if(introPositionSupp < supPosition){
    InestBody.classList.add("animate__fadeInUp","appear" )
}
}
window.addEventListener("scroll", animatInvest);

// animation on Freelance section
function animateFreelance(){
  var freelance = document.querySelector(".freelance")
  introPositionFree = freelance.getBoundingClientRect().top;
   
  var col1 = document.querySelector(".col1") 
  var col2 = document.querySelector(".col2") 
  var col3 = document.querySelector(".col3") 
  var col4 = document.querySelector(".col4") 

  freePosition = window.innerHeight / 2;

  if(introPositionFree < freePosition){
    col1.classList.add("animate__fadeInRight","appear" )
    col2.classList.add("animate__fadeInUp","appear" )
    col3.classList.add("animate__fadeInDown","appear" )
    col4.classList.add("animate__fadeInLeft","appear" )
}
}
window.addEventListener("scroll", animateFreelance);

// animation on supplier section
function animatesFaq(){
  var faq = document.querySelector(".faq")
  introPositionfaq = faq.getBoundingClientRect().top;
   
  var questions = document.querySelector(".details") 


  faqPosition = window.innerHeight / 2;

  if(introPositionfaq < faqPosition){
    questions.classList.add("animate__fadeInUp","appear" )
}
}
window.addEventListener("scroll", animatesFaq);