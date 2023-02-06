class Student{
     constructor(sId, sName){
         this.id= sId;
         this.name= sName;
         this.relation= "Niloy Loves Mahi or Mahi lover Niloy"
     }
}

const Student1 = new Student(13, "Niloy");

const Student2 = new Student(39 , "Mahi");

console.log( Student1.name, Student2)