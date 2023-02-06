class parent{
    constructor(){
        this.fatherName = "Soltan Raj";
    }
}

class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Nabila")

console.log(baby);