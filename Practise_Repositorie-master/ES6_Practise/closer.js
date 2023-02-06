function niloy(){
    let mahi = 4 ;
    return function(){
        mahi ++;
        return mahi
    }
}

const alim = niloy();
const alim1 = niloy();

console.log(alim());
console.log(alim1());
console.log(alim());
console.log(alim1());
console.log(alim());
console.log(alim1());
console.log(alim());
console.log(alim1());
console.log(alim());
console.log(alim1());