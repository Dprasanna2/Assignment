function validate(){
    fname_validate();
    lname_validate();
    email_validate();
    conpass_validate();
    dropdown();
    city_validate();
    zip_validate();
    university();
    company();
    company_url();
    uni_url();
    review_validate();
    published();
    pass_validate();
    dropdownState();

let title= document.querySelector('input[name=optradio]:checked').value;
 if(title=='University'){
       var name=university();
       var url=uni_url();
   }
   else if(title=='Company'){
    var name=company();
    var url=company_url();
    }
    else{
    var name=true;
    var url=true;
    }
    if(fname_validate() == true  && lname_validate() == true && email_validate() == true &&pass_validate() == true && conpass_validate() == true && city_validate() == true && zip_validate() == true && name == true && url == true && published()==true && radio_selection()==true && dropdown()==true && dropdownState()==true )
      {
       document.getElementById('data').setAttribute("data-target","#myModal");
       modal();  
    }
    else{
        document.getElementById('data').setAttribute("data-target","")
    }
    return false;
}
    function validate_All(feild_id,regex,error_alert,onclick_error,cond_error){
        if(document.getElementById(feild_id).value==""){
            document.getElementById(error_alert).innerHTML=onclick_error;
            document.getElementById(feild_id).focus();
            return false;
        }
        else if(regex.test(document.getElementById(feild_id).value)){
            document.getElementById(error_alert).innerHTML="";
            return true;
        }
        else{
            document.getElementById(error_alert).innerHTML=cond_error;
            return false;
        }
    }

//  script for firstname //
function fname_validate()
{
   return validate_All('f_name',/^[a-zA-Z]{3,}$/i,'fname_alert',"*Please fill the firstname*","*Enter only character more than 2*");
}

//  script for lastname //
function lname_validate()
{
    return validate_All('l_name',/^[a-zA-Z]{3,}$/i,'lname_alert',"*Please fill the lastname*","*Enter only character more than 2*");
}

//  script for email //
function email_validate()
{
        return validate_All('email',/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email_alert',"*Enter email id*","*Enter valid id*");
}

//script for password //
let passwordInput = document.getElementById('txtPassword'),
    toggle = document.getElementById('btnToggle'),
    icon =  document.getElementById('eyeIcon');
function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = 'password';
    icon.classList.remove("fa-eye-slash");
  }
}
toggle.addEventListener('click', togglePassword, false);
function pass_validate()
{
    var txtPassword=document.getElementById('txtPassword').value;
    var message="";
    var UpCase=/[A-Z]+/;
    var LowCase=/[a-z]+/;
    var Num=/[0-9]+/;
    var SpecialChar=/[!@#$%^&*]+[\w\d]*[!@#$%^&*]+/;
    var Space=/[ ]+/;
    if(UpCase.test(txtPassword) == false)
    {
        message+="Enter one Upper Case," + '';
    }
    if(LowCase.test(txtPassword) == false)
    {
        message+="Enter one Lower Case," + '';
    }
    if(Num.test(txtPassword) == false)
    {
        message+="Enter one Number," + '';
    }
    if(SpecialChar.test(txtPassword) == false)
    {
        message+="Enter two Special character,"+ '' ;
    }
    if(Space.test(txtPassword)==true)
    {
        message+="No Space allowed,"+ '';
    }
    if(txtPassword.length < 8)
    {
        message+="Password length should be 8" +'';
    }
    if(txtPassword == "")
    {
        document.getElementById('pass_alert').innerHTML="Please enter password";
        return false;
    }
    else if(UpCase.test(txtPassword) && LowCase.test(txtPassword) &&  Num.test(txtPassword) &&  SpecialChar.test(txtPassword)  && txtPassword.length >= 8 && Space.test(txtPassword)==false)
    {
        document.getElementById('pass_alert').innerHTML="";
        return true;
    }
    else{
        document.getElementById('pass_alert').innerHTML= message;
        return false;
    }
}
function Strenght_Bar(strength,progbar,strength_alert,color,msg,bgcolor){
    document.getElementById(strength).style.width=progbar;
    document.getElementById(strength_alert).style.color=color;
    document.getElementById(strength_alert).innerHTML=msg;
    document.getElementById(strength).style.backgroundColor= bgcolor;
    document.getElementById(strength).innerHTML= progbar;
}
function pass_strength(){
    var pass=document.getElementById('txtPassword').value;
    var progbar=document.getElementById('strength');
    var strength=0;
    if(pass.match(/[a-zA-Z]+/)){
        strength +=1;
    }
    if(pass.match(/[0-9]/)){
        strength +=1;
    }
    if(pass.match(/[!@#$%^&*()]+/)){
        strength +=1;
    }
    if(pass.match(/[!@#$%^&*()]+/)){
        strength +=1;
    }
    if(pass.length>=8 ){
        strength +=1;
    }
    if(pass.length>=15){
        strength +=1;
    }
    switch(strength){
        case 0: progbar.value='0%';
        Strenght_Bar('strength',progbar.value,'strength_alert',"","","")
        document.getElementById('strength').innerHTML="";
        break;
        case 1: progbar.value='10%';
        Strenght_Bar('strength',progbar.value,'strength_alert',"red","WEAK","#DC3545");
        break;
        case 2: progbar.value='30%';
        Strenght_Bar('strength',progbar.value,'strength_alert',"blue","FAIR","#FFC107");
        break;
        case 3: progbar.value='50%';
        Strenght_Bar('strength',progbar.value,'strength_alert','blue',"AVERAGE","#17A2B8");
        break;
        case 4: progbar.value='60%';
        Strenght_Bar('strength',progbar.value,'strength_alert','blue',"GOOD","#ff0080");
        break;
        case 5: progbar.value='70%';
        Strenght_Bar('strength',progbar.value,'strength_alert',"green","V.GOOD","#252E44");
        break;
        case 6: progbar.value='100%';
        Strenght_Bar('strength',progbar.value,'strength_alert',"green","SECURE","#3CB371");
        break
        case 7: progbar.value=0;
        document.getElementById('strength_alert').innerHTML="FILL THE PASSWORD";
        break;
    }
}
//script for confirm password//
function conpass_validate(){
    var pass=document.getElementById('txtPassword').value;
    var conPassword=document.getElementById('conPassword').value;
    if(pass!=conPassword){
        document.getElementById('conPass_alert').innerHTML=  "Password Not Matching";
        return false;
    }
    else{
        document.getElementById('conPass_alert').innerHTML="";
        return true;
    }
}
//javascript for country//
function country_validate(){
    if(this.id == 'country_name'){
        document.getElementById('state_name').disabled=true;
    }
    else{
        document.getElementById('state_name').disabled=false;
    }
} 
function dropdown(){
    var value=document.getElementById('country_name').value;
    if(value =="selectcountry"){
        document.getElementById('country_alert').innerHTML="Please select the country";
        return false;
    }
    else{
        document.getElementById('country_alert').innerHTML="";
        return true;
    }
}
function dropdownState(){
    var value=document.getElementById('state_name').value;
    if(value == "selectstate"){
        document.getElementById('state_alert').innerHTML="Please select the state";
        return false;
    }
    else{
        document.getElementById('state_alert').innerHTML="";
        return true;
    }
}
//  script for city name //
 function city_validate()
 {
        return validate_All('city',/^[a-zA-Z ]{3,}$/i,'city_alert',"*Please fill the city name*","*Enter only character more than 2*");
 }

// script for zipcode //
function zip_validate(){
    return validate_All('zipcode',/^[0-9]{6}$/i,'zip_alert',"*Enter zip code*","*ENTER VALID ZIP 6 DIGIT NUMBER*");
}
 
//script for radio button//
document.addEventListener("DOMContentLoaded",function(){  document.getElementById('University').style.display ='none';
document.getElementById('Company').style.display = 'none';});
function Freelancer_display(){
    document.getElementById('University').style.display ='none';
    document.getElementById('Company').style.display = 'none';
    document.getElementById('uni_name').value="";
    document.getElementById('university_url').value="";
    document.getElementById('comp_name').value="";
    document.getElementById('comp_url').value="";
  }
  function University_display(){
    document.getElementById('University').style.display = 'flex';
    document.getElementById('Company').style.display = 'none';
    document.getElementById('comp_name').value="";
    document.getElementById('comp_url').value="";
  }
  function Company_display(){
    document.getElementById('University').style.display = 'none';
    document.getElementById('Company').style.display = 'flex';
    document.getElementById('uni_name').value="";
    document.getElementById('university_url').value="";
  }
//script for university//
function university()
{
    return validate_All('uni_name',/^[a-zA-Z]+$/i,'uni_alert',"*Please fill the name of university*","*Enter only characters*");
}

//script for company//
function company()
{
    return validate_All('comp_name',/^[a-zA-Z]+$/i,'comp_alert',"*Please fill name of company*","*Enter only characters*");
}

//  script for COMPANY_url and university_url //
function company_url(){
    return validate_All('comp_url',/^[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,'company_alert',"*Enter url of company*","*Enter valid url *");
}

function uni_url(){
    return validate_All('university_url',/^[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,'university_alert',"*Enter url of university*","*Enter valid url *");
}

//script for radio button //
function seniorAll(){
    document.getElementsByName('checkedAll')[0].disabled=true;
    document.getElementsByName('checkedAll')[1].disabled=true;
    document.getElementsByName('checkedAll')[2].disabled=true;
    document.getElementsByName('checkedAll')[3].disabled=true;
    var items=document.getElementsByName('checkedAll');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=true;
    }
}

function juniorAll(){
    var items1=document.getElementsByName('checkedAll');
    for(var i=0; i<items1.length; i++){
        if(items1[i].type=='checkbox')
         items1[i].checked=false;
    }
    document.getElementsByName('checkedAll')[0].disabled=false;
    document.getElementsByName('checkedAll')[1].disabled=false;
    document.getElementsByName('checkedAll')[2].disabled=false;
    document.getElementsByName('checkedAll')[3].disabled=false;
}

function radio_selection() {
    var radio1=document.getElementById('senior').checked;
    var radio2=document.getElementById('junior').checked;
    var inputs = document.getElementsByName("checkedAll");
    var count = 0;
    if(radio2==true){
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox" && inputs[i].checked) {
            count++;
        }
    }
        if(count<2)
        {
            document.getElementById('notvalid').innerHTML="Please select atleast two checkbox";
            return false;
        }
        else if(count==4){
            document.getElementById('notvalid').innerHTML="Not more than 3";
        }
        else
        {
            document.getElementById('notvalid').innerHTML="";
            return true;
        }
    }
    if(radio1==true){
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "checkbox" && inputs[i].checked) {
                count++;
            }
        }
            if(count < 4)
            {
                document.getElementById('notvalid').innerHTML="Please select all checkbox";
                return false;
            }
            if(count == 4)
            {
                document.getElementById('notvalid').innerHTML="";
                return true;
            }
        }
}

//script for published//
function review_validate(){
    if(this.id == 'senior'){
        document.getElementById('pub_input').disabled=true;
    }
    else{
        document.getElementById('pub_input').disabled=false;
    }
} 
 function published(){
    var radio1=document.getElementById('senior').checked;
    var radio2=document.getElementById('junior').checked;
    var input=document.getElementById('pub_input').value;
    if(radio1==true){
        if(input < 15 || input=="")
        {
            document.getElementById('alert').innerHTML="*Enter number greater or equal to 15*";
            return false;
        }
        if(input >= 15)
        { 
            document.getElementById('alert').innerHTML="";
            return true;
        }
        }
        if(radio2==true)
        {
        if(input < 2 || input == ""){
            document.getElementById('alert').innerHTML="*Enter number greater than 2*";
            return false;
        }
        if(input >= 2)
        { 
            document.getElementById('alert').innerHTML="";
            return true;
        }
        }
        }
function modal()
{
   
    document.getElementById('FirstN').innerHTML= document.getElementById('f_name').value;
    document.getElementById('LastN').innerHTML= document.getElementById('l_name').value;
    document.getElementById('EMAILId').innerHTML=document.getElementById('email').value;
    document.getElementById('CountryN').innerHTML=  document.getElementById('country_name').value;
    document.getElementById('StateN').innerHTML=document.getElementById('state_name').value;
    document.getElementById('CityN').innerHTML=document.getElementById('city').value;
    document.getElementById('ZipN').innerHTML= document.getElementById('zipcode').value;
    var title= document.querySelector('input[name=optradio]:checked').value;
    document.getElementById('IAM').innerHTML=title;
    if(title == "Freelancer"){
        document.getElementById('Uni_N').innerHTML="NOT APPLICABLE";
        document.getElementById('Uni_web').innerHTML="NOT APPLICABLE";
        document.getElementById('Comp_N').innerHTML="NOT APPLICABLE";
        document.getElementById('Comp_web').innerHTML="NOT APPLICABLE";
    } 
     else if(title == "University"){
        document.getElementById('Comp_N').innerHTML="NOT APPLICABLE";
        document.getElementById('Comp_web').innerHTML="NOT APPLICABLE";
        document.getElementById('Uni_N').innerHTML=document.getElementById('uni_name').value;
        document.getElementById('Uni_web').innerHTML="http://www."+ document.getElementById('university_url').value;
    }
    else{
        document.getElementById('Uni_N').innerHTML="NOT APPLICABLE";
        document.getElementById('Uni_web').innerHTML="NOT APPLICABLE";
        document.getElementById('Comp_N').innerHTML= document.getElementById('comp_name').value;
        document.getElementById('Comp_web').innerHTML="http://www."+ document.getElementById('comp_url').value;
    }
    document.getElementById('syst').innerHTML= document.querySelector('input[name=opttradio]:checked').value;
    var Box=document.getElementsByName('checkedAll');
    var checkbox=[];
    for(var x=0;x<Box.length; x++){
    if(Box[x].checked==true)
    checkbox.push(Box[x].value);
} 
    document.getElementById('skill').innerHTML=checkbox;  
    document.getElementById('pub_review').innerHTML=document.getElementById('pub_input').value;
}




















