import { display } from "./ui.module.js";
var x= new display();

import {detail} from "./details.module.js";
var t=new detail();

 
import {search} from "./search.module.js";
var y=new search();

import {categ} from "./Categories.module.js";
var g=new categ();

import {area} from "./area.module.js";
var h=new area();

import {ingre} from "./Ingredients.module.js";
var j=new ingre();


export class home{
  
}
home.prototype.getdata=async function(){
 var datalist=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
   var response=await api.json()
   
   datalist=response;
  
   x.displays(datalist)

 

var sec=document.querySelectorAll(".sec")
 sec.forEach(ele => {
    ele.addEventListener("click",function(){
 $(".home").addClass("d-none")
 $(".search").css({display:"none"})
 $(".det").css({display:"block"})
 $(".categ").css({display:"none"})
  var z=ele.getAttribute("idMeal")
  console.log(z);
 t.getdata(z);
 console.log("hello");
});
})
   

}

