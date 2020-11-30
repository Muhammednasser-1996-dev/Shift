$(document).ready(function(){
  //loading spinner
  $("#loading").slideUp(2000 , function(){
  
    $("body").css("overflow","auto")
  });
  })

// firing the owel carousel plugin
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({autoplay:true,
     autoplayHoverPause:true, loop:true,items:4,center:true,margin:40 , items:5,});
});

// navigator
$("a").click(function(){   
  var sectionId= $(this).attr("href");
  var positionOfSection = $(sectionId).offset().top / 1.04;
  $("html , body").animate({scrollTop:positionOfSection},1000);
})

//change background color of navbar while scrolling
window.addEventListener("scroll", ()=>{
  let navi = document.getElementById('navi')
  navi.classList.toggle("scroll", scrollY > 0)
});

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

// animation on team section
function animateTeam(){
  var freelance = document.querySelector(".team")
  introPositionFree = freelance.getBoundingClientRect().top;
   
  var col1 = document.querySelector(".team-content") 
 

  freePosition = window.innerHeight / 2;

  if(introPositionFree < freePosition){
    col1.classList.add("animate__fadeInRight","appear" )
}
}
window.addEventListener("scroll", animateTeam);

// animation on supplier section
function animatesproduct(){
  var faq = document.querySelector(".product")
  introPositionfaq = faq.getBoundingClientRect().top;
   
  var questions = document.querySelector(".product-content") 


  faqPosition = window.innerHeight / 2;

  if(introPositionfaq < faqPosition){
    questions.classList.add("animate__fadeInUp","appear" )
}
}
window.addEventListener("scroll", animatesproduct);

// animate incentive
function animatesIncentive(){
  var faq = document.querySelector(".incentive")
  introPositionfaq = faq.getBoundingClientRect().top;
   
  var questions = document.querySelector(".intencive-content") 


  faqPosition = window.innerHeight / 2;

  if(introPositionfaq < faqPosition){
    questions.classList.add("animate__fadeInLeft","appear" )
}
}
window.addEventListener("scroll", animatesIncentive);

//animate event
function animatesEvent(){
  var faq = document.querySelector(".event")
  introPositionfaq = faq.getBoundingClientRect().top;
   
  var questions = document.querySelector(".event-content") 


  faqPosition = window.innerHeight / 2;

  if(introPositionfaq < faqPosition){
    questions.classList.add("animate__fadeInRight","appear" )
}
}
window.addEventListener("scroll", animatesEvent);

// animate QR
function animatesQR(){
  var faq = document.querySelector(".Qr")
  introPositionfaq = faq.getBoundingClientRect().top;
   
  var questions = document.querySelector(".Qr-content") 


  faqPosition = window.innerHeight / 2;

  if(introPositionfaq < faqPosition){
    questions.classList.add("animate__fadeInLeft","appear" )
}
}
window.addEventListener("scroll", animatesQR);
 


// dynamic tabs on my team apps section
$(".tabs-list li ").click(function () { 
  $(this).addClass('active').siblings().removeClass('active');
  $('.content-list > div').hide();
  $($(this).data('content')).fadeIn()
});

//typing 
var typed = new Typed('.type', {
  strings: ['better', 'more efficient','stronger'],
  typeSpeed : 100,
  backSpeed : 100,
  loop : true
});




