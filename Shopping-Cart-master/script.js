// subtotal cost , tax cost , total cost
var subtotalCost = document.getElementById("subtotalCost");
var taxCost = document.getElementById("taxCost");
var totalCost = document.getElementById("totalCost");


// decreaser and increaser function
function decreaser(price,inputId, priceId){
    var parser1 = parseInt(inputId.value);
    parser1 --
    inputId.value = parser1;
    priceId.innerText = price*parseInt(inputId.value);
    subtotalCost.innerText = parseInt(priceItem1.innerText)+parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subtotalCost.innerText/100);
    totalCost.innerText = parseInt(subtotalCost.innerText)+parseInt(taxCost.innerText) ;
}
function increaser(price,inputId,priceId){
    var parser2 = parseInt(inputId.value);
    parser2 ++
    inputId.value = parser2;
    priceId.innerText=price*parseInt(inputId.value);
    subtotalCost.innerText = parseInt(priceItem1.innerText)+parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subtotalCost.innerText/100);
    totalCost.innerText = parseInt(subtotalCost.innerText)+parseInt(taxCost.innerText) ;
}
// item 1 price and amount calculation
var decreaseItem1 = document.getElementById("decreaseItem1");
var inputItem1 = document.getElementById("inputItem1");
var increaseItem1 = document.getElementById("increaseItem1");
var priceItem1 = document.getElementById("priceItem1");


decreaseItem1.addEventListener("click", function(){
    decreaser(1200,inputItem1,priceItem1);
})

increaseItem1.addEventListener("click", function (){
    increaser(1200,inputItem1,priceItem1)
})


//item 2 price and amount calculation
var decreaseItem2 = document.getElementById("decreaseItem2");
var inputItem2 = document.getElementById("inputItem2");
var increaseItem2 = document.getElementById("increaseItem2");
var priceItem2 = document.getElementById("priceItem2");

decreaseItem2.addEventListener("click",function(){
    decreaser(59,inputItem2,priceItem2);
})
increaseItem2.addEventListener("click",function(){
    increaser(59,inputItem2,priceItem2)
})


// cancel a item
var item1= document.getElementById("item1");
var cancelItem1=document.getElementById("cancelItem1");
var item2 = document.getElementById("item2");
var cancelItem2 = document.getElementById("cancelItem2");

cancelItem1.addEventListener("click",function(event){
    item1.style.display = "none";
    priceItem1.innerText = 0;
    subtotalCost.innerText = parseInt(priceItem1.innerText)+parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subtotalCost.innerText/100);
    totalCost.innerText = parseInt(subtotalCost.innerText)+parseInt(taxCost.innerText) ;
})

cancelItem2.addEventListener("click",function(){
    item2.style.display = "none";
    priceItem2.innerText = 0;
    subtotalCost.innerText = parseInt(priceItem1.innerText)+parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subtotalCost.innerText/100);
    totalCost.innerText = parseInt(subtotalCost.innerText)+parseInt(taxCost.innerText) ;
})

// checkout
var checkoutBtn = document.getElementById("checkoutBtn");
var section = document.getElementById("section");
var greeter = document.getElementById("greeter");

checkoutBtn.addEventListener("click",function(){
    section.style.display = "none";
    greeter.style.display = "block";
})