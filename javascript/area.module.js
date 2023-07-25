
import { display } from "./ui.module.js";
var p= new display();

import {detail} from "./details.module.js";
var t=new detail();


export class  area{
  
}

area.prototype.getdatalist=async function(){
 
  var datalist=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   var response=await api.json()
   

   datalist=response
console.log(datalist);
  p.dispalyarea(datalist)

  
var sec=document.querySelectorAll(".areasec")
sec.forEach(ele => {
   ele.addEventListener("click",function(){

 var u=ele.getAttribute("areameal")
console.log(u);
 v.getdataarea(u);

});
})
 
}
var v=new area()




area.prototype.getdataarea=async function(areaName){
 
    var datalist=[]
   var api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
     var response=await api.json()
     
  
     datalist=response
  console.log(response);
    p.displayKinds(datalist)

  
var sec=document.querySelectorAll(".cat")
sec.forEach(ele => {
   ele.addEventListener("click",function(){
    $(".are").css({display:"none"})
$(".det").css({display:"block"})
 var z=ele.getAttribute("idMeal")
 console.log(z);
t.getdata(z);
console.log("hello");
});
})
  
 }

$(".area").click(function(){
    $(".home").addClass("d-none")
    $(".det").css({display:"none"})
    $(".search").css({display:"none"})
    $(".categ").css({display:"none"})
    $(".are").css({display:"block"})
    $(".ingredien").css({display:"none"})
    $(".contactus").css({display:"none"})
   
    v.getdatalist()
    
  })
     