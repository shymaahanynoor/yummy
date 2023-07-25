
import { display } from "./ui.module.js";
var r= new display();

import {detail} from "./details.module.js";
var t=new detail();


export class  categ{
  
}

categ.prototype.getdatalist=async function(){
 
  var datalistcat=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   var response=await api.json()
   

   datalistcat=response
console.log(datalistcat);
  r.displayCat(datalistcat)

  
var sec=document.querySelectorAll(".cate")
sec.forEach(ele => {
   ele.addEventListener("click",function(){

 var u=ele.getAttribute("nameMeal")

 m.getdatacateg(u);

});
})
 
}
var m=new categ()




categ.prototype.getdatacateg=async function(CategoryName){
 
    var datalistcatname=[]
   var api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`)
     var response=await api.json()
     
  
     datalistcatname=response
  console.log(response);
    r.displayKind(datalistcatname)

  
var sec=document.querySelectorAll(".cat")
sec.forEach(ele => {
   ele.addEventListener("click",function(){

$(".det").css({display:"block"})
$(".categ").css({display:"none"})
 var z=ele.getAttribute("idMeal")
 console.log(z);
t.getdata(z);
console.log("hello");
});
})
  
  }

$(".categories").click(function(){
    $(".home").addClass("d-none")
    $(".det").css({display:"none"})
    $(".search").css({display:"none"})
    $(".are").css({display:"none"})
    $(".categ").css({display:"block"})
    $(".ingredien").css({display:"none"})
    $(".contactus").css({display:"none"})
    m.getdatalist()
  })