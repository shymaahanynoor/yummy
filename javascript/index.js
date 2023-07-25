
import { home } from "./home.module.js";

var y=new home()
y.getdata()



$("#close,li").click(function(){

    var left=$(".header").css("left");
    var width=$(".bar").outerWidth(true)
    console.log(width);
    if(left=="0px") {
       
        $(".header").animate({left:`-${width}px`},1000)
        $(".icons").removeClass("fa-close")
        $(".icons").addClass("fa-bars")
         $(".ull ul li").slideUp(500);
     
    
     }else{
            $(".header").animate({left:`0px`},1000)
            $(".icons").removeClass("fa-facebook")
            $(".icons").addClass("fa-close")
           $(".ull ul li").slideDown(1000);
        }

})
var width=$(".bar").outerWidth(true)
$(".icons").removeClass("fa-close")
$(".icons").addClass("fa-bars")
$(".header").css({left:`-${width}px`})




$(".contact").click(function(){
 $(".contactus").css({display:"flex"})
  $(".home").addClass("d-none")
  $(".det").css({display:"none"})
  $(".categ").css({display:"none"})
  $(".are").css({display:"none"})
  $(".search").css({display:"none"})
  $(".ingredien").css({display:"none"})
})

var name=document.getElementById("name")
var phone=document.getElementById("phone")
var email=document.getElementById("email")
var age=document.getElementById("age")
var pass=document.getElementById("pass")
var repass=document.getElementById("repass")


$("#name").keyup(function(){
    var regName =/[0-9]{1,20}|[.!@#$%^&*()_+-=]/;
  
    if(regName.test(name.value)){
        
        $(".alert.name").addClass("d-block")
        $(".alert.name").removeClass("d-none")
        document.querySelector(".btn").disabled=true
       
    }else{
      
        $(".alert.name").addClass("d-none")
        $(".alert.name").removeClass("d-block")
        document.querySelector(".btn").disabled=false
        
    }
})

$("#phone").keyup(function(){
    var regphone =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if(!regphone.test(phone.value)){
        
        $(".alert.phone").addClass("d-block")
        $(".alert.phone").removeClass("d-none")
        document.querySelector(".btn").disabled=true
    }else{
      
        $(".alert.phone").addClass("d-none")
        $(".alert.phone").removeClass("d-block")
        document.querySelector(".btn").disabled=false
        
    }



})


$("#email").keyup(function(){
    var regemail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regemail.test(email.value)){
        
        $(".alert.email").addClass("d-block")
        $(".alert.email").removeClass("d-none")
        document.querySelector(".btn").disabled=true
    }else{
      
        $(".alert.email").addClass("d-none")
        $(".alert.email").removeClass("d-block")
        document.querySelector(".btn").disabled=false
        
    }



})


$("#age").keyup(function(){
    var regage =/^\S[0-9]{0,2}$/;

    if(!regage.test(age.value)){
        
        $(".alert.age").addClass("d-block")
        $(".alert.age").removeClass("d-none")
        document.querySelector(".btn").disabled=true
       
    }else{
      
        $(".alert.age").addClass("d-none")
        $(".alert.age").removeClass("d-block")
        document.querySelector(".btn").disabled=false
        
    }



})

$("#pass").keyup(function(){
    var regpass =/^[a-zA-Z0-9!@#$%^&*]{8,20}$/
 
    if(!regpass.test(pass.value)){
        
        $(".alert.pass").addClass("d-block")
        $(".alert.pass").removeClass("d-none")
        document.querySelector(".btn").disabled=true
    }else{
      
        $(".alert.pass").addClass("d-none")
        $(".alert.pass").removeClass("d-block")
        document.querySelector(".btn").disabled=false
        
    }



})

$("#repass").keyup(function(){
    

    if(pass.value==repass.value){
       
        $(".alert.repass").addClass("d-none")
        $(".alert.repass").removeClass("d-block")
        document.querySelector(".btn").disabled=false
    }else{
       
        $(".alert.repass").addClass("d-block")
        $(".alert.repass").removeClass("d-none")
        document.querySelector(".btn").disabled=true
        
    }

})
document.querySelector(".btn").disabled=true
