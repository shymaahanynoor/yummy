
import { display } from "./ui.module.js";
var l= new display();

import {detail} from "./details.module.js";
var t=new detail();


export class  ingre{
  
}

ingre.prototype.getingerlist=async function(){
 
  var datalist=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
   var response=await api.json()
   

   datalist=response
console.log(datalist);
  l.dispalyingre(datalist)

  
var sec=document.querySelectorAll(".trak")
 sec.forEach(ele => {
   ele.addEventListener("click",function(){

 var u=ele.getAttribute("ingrmeal")
console.log(u);
 w.getdataarea(u);

});
})
 
}
var w=new ingre()




ingre.prototype.getdataarea=async function(ingreName){
 
    var datalist=[]
   var api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingreName}`)
     var response=await api.json()
     
  
     datalist=response
  console.log(response);
    l.displayKindss(datalist)

  
var sec=document.querySelectorAll(".cat")
sec.forEach(ele => {
   ele.addEventListener("click",function(){
    $(".ingredien").css({display:"none"})
$(".det").css({display:"block"})
 var z=ele.getAttribute("idMeal")
 console.log(z);
t.getdata(z);

});
})
  
 }

$(".ingredient").click(function(){
    $(".home").addClass("d-none")
    $(".det").css({display:"none"})
    $(".search").css({display:"none"})
    $(".categ").css({display:"none"})
    $(".are").css({display:"none"})
    $(".ingredien").css({display:"block"})
    $(".contactus").css({display:"none"})
    w.getingerlist()
  })
     