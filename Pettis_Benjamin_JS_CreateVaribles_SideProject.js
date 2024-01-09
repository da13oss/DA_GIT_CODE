//Varible to determine the height of a riders eligibility to ride the roller coaster
//used this site to add a conditional to the code https://www.w3schools.com/js/js_if_else.asp and this video https://www.youtube.com/watch?v=IsG4Xd6LlsM
let minimum_age =10;
let minimum_height =42; 

if (minimum_age >=10 && minimum_height >=42){

console.log('Eligible to ride');
}

else if (minimum_age <10 && minimum_height <42){
    console.log('Not Eligible to ride')
}