
import { display } from "./ui.module.js";
var r= new display();

import {detail} from "./details.module.js";
var t=new detail();


export class  search{
  
}

search.prototype.getdataByName=async function(data){
 
  var datalist=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
   var response=await api.json()
   

   datalist=response
   console.log(datalist);

  r.displays(datalist)
  

var sec=document.querySelectorAll(".sec")
sec.forEach(ele => {
   ele.addEventListener("click",function(){
$(".home").addClass("d-none")
$(".search").css({display:"none"})
$(".det").css({display:"block"})
 var z=ele.getAttribute("idMeal")
 console.log(z);
t.getdata(z);
console.log("hello");
});
})
}


search.prototype.getdataByFl=async function(fl){
  var datalist=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fl}`)
   var response=await api.json()
   

   datalist=response
   console.log(response);
  r.displays(datalist)

  

var sec=document.querySelectorAll(".sec")
sec.forEach(ele => {
   ele.addEventListener("click",function(){
$(".home").addClass("d-none")
$(".search").css({display:"none"})
$(".det").css({display:"block"})
 var z=ele.getAttribute("idMeal")
 console.log(z);
t.getdata(z);
console.log("hello");
});
})
}


$(".searches").click(function(){
  $(".home").addClass("d-none")
  $(".det").css({display:"none"})
  $(".categ").css({display:"none"})
  $(".are").css({display:"none"})
  $(".search").css({display:"inline-block"})
  $(".ingredien").css({display:"none"})
  $(".contactus").css({display:"none"})
})

var y=new search()


$("#ser").keyup(function(){
  var d=document.getElementById("ser");
  var data=(d.value).trim();
  console.log(data);
 y.getdataByName(data)
  
})


 $("#sere").keyup(function(){
  var d=document.getElementById("sere");
  var data=(d.value).trim();
  console.log(data);
 
  y.getdataByFl(data)

 })