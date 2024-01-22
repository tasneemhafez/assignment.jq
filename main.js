 const closee = document.getElementById('close');
  const sidenav = document.querySelector('.sidenav')
const ico = document.getElementById('ico');
 const sidBar = document.getElementById('sidBar');

 closee.addEventListener('click', function(){
    sidenav.classList.add('d-none')
 })



 $('a').on('click',function(e){
  let href =e.target.getAttribute('href')
    let sectionOffest = $(href).offset().top;
         $ ("html , body").animate({scrollTop:sectionOffest} , 2000)

 })

 $('#ico').on('click',function(){
    $('.sidenav').show(1000);
   

 })
   ico.addEventListener('click', function(){
    sidenav.classList.remove('d-none')
   })
   // section2
 
      
   $('#Duration .heade').click(function(){
      $('.inner').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);
  });
  

window.onload = function() {
   
   countDownToTime("25 october 2024 9:56:00");
 }

 function countDownToTime(countTo) {
 
       let futureDate = new Date(countTo);
   futureDate = (futureDate.getTime()/1000);

   let now = new Date();
   now = (now.getTime()/1000);

   timeDifference = (futureDate- now);
       
  let days = Math.floor( timeDifference / (24*60*60));
  let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
  let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
  let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


   $(".days").html(`${days} D`);
   $(".hours").html(`${hours} h`);
   $(".minutes").html(`${ mins } m`);
   $('.seconds').html(`${ secs} s`)

 
   setInterval(function() {  countDownToTime(countTo); }, 1000);
 }




 
 var maxLength = 100;
 $('textarea').keyup(function() {
   var length = $(this).val().length;
   var AmountLeft = maxLength-length;
   if(AmountLeft<=0)
             {
                  $("#Characyer").text("your available character finished");
                
             }
         else{
        
         $("#Characyer").text(AmountLeft);
         }
 });
