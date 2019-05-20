
$(document).ready(function () {
    
    $('.navbar2').hide();
    
    $(function () {
        
        $(window).scroll(function (){
            
            if($(this).scrollTop() > 70) {
                
                $('.navbar2').fadeIn();
                
            }else{
                
                $('.navbar2').fadeOut();
                
            }
            
        })
        
    });
    
});

$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
          //set distance user needs to scroll before we start progress-bar
          
           if($(this).scrollTop() > 500) {
               $('.pru .pro1').animate({
                       width:'100%' },1000);
                   }
           
           else {
               $('.pru .pro1').animate({
                       width:'100%' },1000);
                
                   }
           });
       }); 
    });



$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
         //set distance user needs to scroll before we start progress-bar        
           if($(this).scrollTop() > 500) {
               $('.pru .pro2').animate({
                       width:'90%' },2000);
                  
               }
           
           else {
               $('.pru .pro2').animate({
                       width:'90%' },2000);
              }
           });
       }); 
    });

$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
           //set distance user needs to scroll before we start progress-bar
          
           if($(this).scrollTop() > 500) {
               $('.pru .pro3').animate({
                       width:'70%' },3000);
                  
               }
           
           else {
               $('.pru .pro3').animate({
                       width:'70%' },3000);
               }
           });
       }); 
    });
$(document).ready(function(){
 
    $(function(){
       $(window).show(function () {
          //set distance user needs to scroll before we start progress-bar
         
           if($(this).scrollTop() > 500) {
               $('.pru .pro4').animate({
                       width:'55%' },4000);
                  
               }
           
           else {
               $('.pru .pro4').animate({
                       width:'55%' },4000);
                }
           });
       }); 
    });
//portifolio mixed
$('#container').mixItUp();


