function firstName(){
    document.getElementById('op1').value = document.getElementById('Fname').value;
    //document.getElementById('op1').value = " Check";
 }
 function lastName(){
     document.getElementById('op2').value = document.getElementById('Lname').value;
 }
 function birthDate() {
     document.getElementById('op3').value = document.getElementById('Birth').value;
 }
 function cityDepart() {
     document.getElementById('op4').value = document.getElementById('Dcity').value;
 }
 function goingTo(){
     document.getElementById('op5').value = document.getElementById('Des').value;
 }
 function dateLeave() {
     document.getElementById('op6').value = document.getElementById('dleave').value;
 }
 function dateGo() {
     document.getElementById('op7').value = document.getElementById('denter').value;
 }
 
 function numBags() {
     if(document.getElementById('bag').checked == true){
         document.getElementById('op8').value = document.getElementById('bag').value;
     }else if(document.getElementById('suit').checked == true){
         document.getElementById('op9').value = document.getElementById('suit').value;
     }else{
         document.getElementById('op10').value = document.getElementById('case').value;
     }
 }
 
 function mealType() {
     if(document.getElementById('meat').checked == true){
         document.getElementById('op11').value = document.getElementById('meat').value;
     }else if(document.getElementById('water').checked == true){
         document.getElementById('op12').value = document.getElementById('water').value;
     }else{
         document.getElementById('op13').value = document.getElementById('veg').value;
     }
 }
 function extraRec(){
     if(document.getElementById('leg').checked == true){
         document.getElementById('op14').value = document.getElementById('leg').value;
     }else if(document.getElementById('wseat').checked == true){
         document.getElementById('op15').value = document.getElementById('wseat').value;
     }else if(document.getElementById('head').checked == true){
         document.getElementById('op16').value = document.getElementById('head').value;
     }else{
         document.getElementById('op17').value = document.getElementById('extra').value;
     }
 };
 function ageNum() {
     document.getElementById('op18').value = document.getElementById('age').value;
 };
 function goneFor() {
     document.getElementById('op19').value = document.getElementById('leave').value;
 };
 
function list() {
    var temp = [document.getElementById('op1').value, document.getElementById('op2').value,document.getElementById('op3').value,document.getElementById('op4').value,
    document.getElementById('op5').value,document.getElementById('op6').value,document.getElementById('op7').value,document.getElementById('op8').value
    ,document.getElementById('op9').value,document.getElementById('op10').value,document.getElementById('op11').value,document.getElementById('op12').value
    ,document.getElementById('op13').value,document.getElementById('op14').value,document.getElementById('op15').value,document.getElementById('op16').value,
    document.getElementById('op17').value,document.getElementById('op18').value,document.getElementById('op19').value];
    document.getElementById('user').value = temp;
}


