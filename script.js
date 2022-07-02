function BMI(weight = 88,height = 1.73){
    return(weight/(height*height));
}
console.log(BMI(63,1.63));
console.log(BMI());
function Status(bmi){
if(bmi <18.5){
return "لديك نقص في الوزن"
} 
 if(bmi>=18.5 && bmi<25){
return "وزنك صحي"
}
if(bmi>=25){
return "لديك زيادة في الوزن"
}

}