

export class display{
    displays(datalist){
        var temp=""
        for (const i in datalist.meals ) {
           
        temp+=
        `
        <div class=" sec col-md-3 col-sm-12  pb-4 " idMeal=${datalist.meals[i].idMeal}>
        <div class="part">
     
            <div class="overlay px-2">
            <p>${datalist.meals[i].strMeal}</p>
            </div>
         <img src="${datalist.meals[i].strMealThumb}" width="100%">  
        
            
            </div>
        </div>
        `
        document.querySelector("#part").innerHTML=temp
        document.querySelector("#parts").innerHTML=temp
       
}


}

displayDetail(datalist){
    let tem="";
 if(datalist.meals[0].strTags !=null){
var arr=datalist.meals[0].strTags.split(",");
arr.forEach(ele => {
  
   tem+=
   `<span class="redSpan" >${ele}</span>`
  
   
 });}else{
    tem=" "
 }



   var temps=""
    temps+=`
    <div class="col-md-4 col-sm-12">
        <img src="${datalist.meals[0].strMealThumb}" style="border-radius:10px" width="80%">
        <p>${datalist.meals[0].strMeal}</p>

    </div>
    <div class="col-md-8 col-sm-12">
        <p class="fs-2">Instraction</p>
        <p class="fs-6">${datalist.meals[0].strInstructions}</p>
           
             <h4>Area : ${datalist.meals[0].strArea}</h4>
             <h4>Category : ${datalist.meals[0].strCategory}</h4>
             <h4> Recipes :</h4>
             <div  class=" span d-flex ingredient flex-wrap">
           
<span id="ingredient">${datalist.meals[0].strMeasure1} ${datalist.meals[0].strIngredient1}</span>
 <span id="ingredient">${datalist.meals[0].strMeasure2} ${datalist.meals[0].strIngredient2}</span>
 <span id="ingredient">${datalist.meals[0].strMeasure3}${datalist.meals[0].strIngredient3}</span>
 <span id="ingredient" > ${datalist.meals[0].strMeasure4}${datalist.meals[0].strIngredient4}</span>
 <span id="ingredient"> ${datalist.meals[0].strMeasure5}${datalist.meals[0].strIngredient5}</span>
 <span id="ingredient"> ${datalist.meals[0].strMeasure6}${datalist.meals[0].strIngredient6}</span>
 <span id="ingredient"> ${datalist.meals[0].strMeasure7}${datalist.meals[0].strIngredient7}</span>
 <span id="ingredient">${datalist.meals[0].strMeasure8}${datalist.meals[0].strIngredient8}</span>
 <span id="ingredient"> ${datalist.meals[0].strMeasure9}${datalist.meals[0].strIngredient9}</span>
 <span id="ingredient">${datalist.meals[0].strMeasure10} ${datalist.meals[0].strIngredient10}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure11}${datalist.meals[0].strIngredient11}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure12}${datalist.meals[0].strIngredient12}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure13}${datalist.meals[0].strIngredient13}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure14}${datalist.meals[0].strIngredient14}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure15}${datalist.meals[0].strIngredient15}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure16}${datalist.meals[0].strIngredient16}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure17}${datalist.meals[0].strIngredient17}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure18}${datalist.meals[0].strIngredient18}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure19}${datalist.meals[0].strIngredient19}</span>
 <span id="ingredient" >${datalist.meals[0].strMeasure20}${datalist.meals[0].strIngredient20}</span>
             </div>
             <h4>Tags:</h4>
             
             <div id="tag">${tem}</div>
             
             <div>
             <button class="btn btn-success"><a href="${datalist.meals[0].strSource}">Source</a></button>
             <button  class="btn btn-danger"><a href="${datalist.meals[0].strSource}">Youtube</a></button>
            </div>
    </div>


`


document.getElementById("detail").innerHTML=temps;
document.querySelectorAll("#ingredient").forEach(ele=>{

    if(ele.innerText==""){
       ele.classList.add("d-none")
    }

    
})



}

displayCat(datalist){
    var temp=""
    for (const i in datalist.categories) {
    temp+=
    `
    <div class=" col-md-3 col-sm-12  pb-4 cate " nameMeal=${datalist.categories[i].strCategory}>
    <div class="part">
 
        <div class="overlay px-2">
        <p class="categ2">${datalist.categories[i].strCategory}</p>
        <p class="categ">${datalist.categories[i].strCategoryDescription}</p>
        </div>
     <img src="${datalist.categories[i].strCategoryThumb}" width="100%">  
    
        
        </div>
    </div>
    `
    document.querySelector("#list").innerHTML=temp
}


}



displayKind(datalist){
    var temp=""
    for (const i in datalist.meals) {
    temp+=
    `
    <div class=" col-md-3 col-sm-12  pb-4 cat" idMeal=${datalist.meals[i].idMeal}>
    <div class="part">
 
        <div class="overlay px-2">
        <p>${datalist.meals[i].strMeal}</p>
       
        </div>
     <img src="${datalist.meals[i].strMealThumb}" width="100%">  
    
        
        </div>
    </div>
    `
    document.querySelector("#list").innerHTML=temp
}


}

displayKinds(datalist){
    var temp=""
    for (const i in datalist.meals) {
    temp+=
    `
    <div class=" col-md-3 col-sm-12  pb-4 cat" idMeal=${datalist.meals[i].idMeal}>
    <div class="part">
 
        <div class="overlay px-2">
        <p>${datalist.meals[i].strMeal}</p>
       
        </div>
     <img src="${datalist.meals[i].strMealThumb}" width="100%">  
    
        
        </div>
    </div>
    `
    
    
  document.getElementById("area").innerHTML=temp

}


}

displayKindss(datalist){
    var temp=""
    for (const i in datalist.meals) {
    temp+=
    `
    <div class=" col-md-3 col-sm-12  pb-4 cat" idMeal=${datalist.meals[i].idMeal}>
    <div class="part">
 
        <div class="overlay px-2">
        <p>${datalist.meals[i].strMeal}</p>
       
        </div>
     <img src="${datalist.meals[i].strMealThumb}" width="100%">  
    
        
        </div>
    </div>
    `
  
  document.getElementById("ingred").innerHTML=temp
}


}

dispalyarea(datalist){
    var temp=""
    for (const i in datalist.meals) {
    temp+=
    ` <div class=" col-md-3 col-sm-12  pb-4 areasec" areameal=${datalist.meals[i].strArea}>
       <i class="fa-solid fa-house-laptop"></i>
       <p>${datalist.meals[i].strArea}</p>
    </div>
    `


  document.getElementById("area").innerHTML=temp
}
}

dispalyingre(datalist){


    
    var temp=""
  
  
    for ( let i=0;i<20;i++) {
        
    temp+=
    ` <div class=" col-md-3 col-sm-12  pb-4 trak" ingrmeal=${datalist.meals[i].strIngredient}>
    <i class="fa-solid fa-drumstick-bite"></i>
       <p>${datalist.meals[i].strIngredient}</p>
       <span>${datalist.meals[i].strDescription}</span>
    </div>
    `
   
    }
  

    document.getElementById("ingred").innerHTML=temp
}
}