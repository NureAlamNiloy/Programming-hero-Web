function getFullName(first , second){
    let fullname= '';
    for (let i = 0; i < arguments.length; i++) {
        
        const element = arguments[i];
        fullname=fullname+' ' + element;
        
    }
    return fullname;
}

const name=getFullName("nura" , "alam" , "Niloy");
console.log(name)






function call(name , night){
   night(name)
}

function night(aso){
    console.log( "good morning",aso)
}

call("tom", night)
