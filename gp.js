$(document).ready(function(){
    $('.icon').click(function(){
        $('.side').fadeIn();
        $('.closeside').click(function(){
            $('.side').fadeOut(); 
        })
    })
    // alert('the "get Gp" button has to be clicked before clicking the "get CGPA" button')
})


var scorearr =[]
var unitarr=[]
var totalpoint=[]
 var totalunit=[]
 var gparr=[]

document.querySelector('.btnget').addEventListener('click', function (){

for (i=1; i<=8; i++) {
   var dom= document.querySelector('#sc_' + i).value;
   //All about the array that contains the gradepoint obtained from the inputed score
   if (document.querySelector('#sc_'+ i).value !==""){
    
        var grade;
        if (dom >= 70){
            grade=5
        } else if (dom < 70 && dom >=60){
            grade = 4
        }else if (dom < 60 && dom >= 50){
            grade = 3
        }else if (dom < 50 && dom >=45){
            grade = 2
        }else if (dom < 45 && dom >=40){
            grade = 1
        }else if ( dom < 40){
            grade =0
        }
  
          
 }else{
     document.querySelector('#sc_'+ i).value = 0;
     grade=0
    
 }//else terminal
 scorearr.push(grade)
 console.log (scorearr)
 


 //All about the array that contains the course unit
 if(document.querySelector('#unt_'+ i).value !==""){
    unitarr.push(parseFloat(document.querySelector('#unt_' + i).value))

 }else{
     document.querySelector('#unt_'+ i).value =0
     unitarr.push(parseFloat(document.querySelector('#unt_'+ i).value))
 }//the terminal for the course unit array
    console.log(unitarr);
 
    
  
 }//for loop terminal


 //Multiplying the gradepoint (obtained from the inputed score) with the inputed course units and summing them all
 var imt=0
for(var m =0; m<=scorearr.length-1; m++){
    var te=  scorearr[m] * unitarr[m]
    imt+=te
 console.log(imt);
}
totalpoint.push(imt)
console.log(totalpoint);


  

 //summing the Unit array data
 var int =0
 for (var n=0; n<= unitarr.length-1; n++){
     int+=unitarr[n]
 }console.log(int)
 totalunit.push(int)
 console.log(totalunit)
 
//Dividing the Total point by the sumtotal of the score array data
var GP= imt/int
console.log(GP)
if (GP === 5 || GP ==4 || GP === 3 || GP === 2 || GP=== 1 || GP === 0 ){
     GP= GP + '.00'
}else{
    GP= Math.floor(GP*100)/100
}
gparr.push(GP)

//commenting the Calculated GP
var comment;
if(GP <= 5.0 && GP >=4.5){
    comment='YOU are on first class with an Excellent GP of ' + GP
}else if(GP < 4.5 && GP >=3.5){
    comment='YOU are on Second class Upper with a sound GP of ' + GP
}else if(GP < 3.5 && GP >=2.5){
    comment='YOU are on Second class Lower with a GP of ' + GP
}else if(GP < 2.5 && GP >=1.5){
    comment='YOU are on Third class with a GP of ' + GP
}else if(GP < 1.5 && GP >=1.0){
    comment='YOU are on pass with  poor GP of ' + GP
}else if(GP <= 1.0 && GP >=0){
    comment='YOU are on probation with a GP of ' + GP + 'Failure to improve next semster will lead you to road 1 ' 
}else{
    comment='please Enter reasonable values'
}
document.querySelector('.what').textContent=comment;
console.log(comment)

scorearr=[]
unitarr=[]



//Inner button next semester
document.querySelector('.btnnext').addEventListener('click', function(){
     for (i=1; i<=8; i++){
        document.querySelector('#sc_'+ i).value =""
        document.querySelector('#unt_'+ i).value=""  
    } //for loop terminal

})//Inner button (next semester) terminal



//inner button (get CGPA)
document.querySelector('.cgpa').addEventListener('click', function (){
var a=0;
var b=0;
    for (i=0; i<= totalunit.length-1; i++){
        a+= totalunit[i]
        b+=totalpoint[i]
}
console.log(a,b);
CGPA = b/a
console.log(CGPA);



if (CGPA === 5 || CGPA ==4 || GP === CGPA || CGPA === 2 || CGPA=== 1 || CGPA === 0 ){
    CGPA= CGPA + '.00'
}else{
    CGPA= Math.floor(CGPA*100)/100
}
//commenting the calculated CGPA
var commen;
if(CGPA <= 5.0 && CGPA >=4.5){
    commen='YOU are on first class with an Excellent CGPA of ' + CGPA
}else if(CGPA < 4.5 && CGPA >=3.5){
    commen='YOU are on Second class Upper with a sound CGPA of ' + CGPA
}else if(CGPA < 3.5 && CGPA >=2.5){
    commen='YOU are on Second class Lower with a CGPA of ' + CGPA
}else if(CGPA < 2.5 && CGPA >=1.5){
    commen='YOU are on Third class with a CGPA of ' + CGPA
}else if(CGPA < 1.5 && CGPA >=1.0){
    commen='YOU are on pass with  poor CGPA of ' + CGPA
}else if(CGPA <= 1.0 && CGPA >=0){
    commen='YOU are on probation with a CGPA of ' + CGPA + 'Failure to improve next semster will lead you to road 1 ' 
}else{
    commen='please Enter reasonable values'
}

 

$('.resultB').fadeIn()
document.querySelector('.resultB').textContent= commen

for(var i=0; i<=gparr.length-1; i++){
    console.log(gparr[i]);
    
   
}

document.querySelector('.gplist').textContent= gparr


})//button cgpa terminal




}) //button get terminal (parent button)





//MISSION SUCCESSFUL 






















// the syntax below is valid. just not in need of it now




// var scr1= document.querySelector('#sc_1').value
// var scr2= document.querySelector('#sc_2').value
// var scr3= document.querySelector('#sc_3').value
// var scr4= document.querySelector('#sc_4').value
// var scr5= document.querySelector('#sc_5').value
// var scr6= document.querySelector('#sc_6').value
// var scr7= document.querySelector('#sc_7').value
// var scr8= document.querySelector('#sc_8').value

// var unt1= document.querySelector('#unt_1').value
// var unt2= document.querySelector('#unt_2').value
// var unt3= document.querySelector('#unt_3').value
// var unt4= document.querySelector('#unt_4').value
// var unt5= document.querySelector('#unt_5').value
// var unt6= document.querySelector('#unt_6').value
// var unt7= document.querySelector('#unt_7').value
// var unt8= document.querySelector('#unt8_').value
//     // alert(scr1)
//     // console.log(scr1)