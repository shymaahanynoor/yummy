
import { display } from "./ui.module.js";
var r= new display();

export class detail{
  
}
detail.prototype.getdata=async function(id){
 var data=[]
 var api= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   var response=await api.json()
   
   data=response;
   
  console.log(response);
  r.displayDetail(data)
  
}
